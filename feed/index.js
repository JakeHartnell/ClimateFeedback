var _ = require('lodash'),
	Twitter = require('twit'),
	http = require('http'),
	env = process.env,
	redis = require("redis").createClient()

var KEY = 'popular3'

redis.get(KEY, function (err, tweets) {
	tweets = JSON.parse(tweets)
	console.log(tweets)
	load(tweets)
})

var helpers = {
	each: function(items, options) {
		return _.map(items, options.fn).join('')
	}
}

function load (tweets) {
	if (!tweets) {
		console.log("  ==> API REQUEST")

		var twit = new Twitter({
		    consumer_key: env.CF_CONSUMER_KEY,
		    consumer_secret: env.CF_CONSUMER_SECRET,
		    access_token: env.CF_TOKEN,
		    access_token_secret: env.CF_TOKEN_SECRET
		})

		twit.get('search/tweets', {
			q: 'climate wsj.com OR foxnews.com OR cnn.com',
			count: 100,
			result_type: 'popular'
		}, function(err, data, response) {
			tweets = data.statuses
			redis.set(KEY, JSON.stringify(tweets))
			console.log(tweets, JSON.stringify(tweets))
		})
	} else {
		console.log("  ==> CACHED")
	}

	// WEBSERVER
	var express = require('express')
	var exphbs = require('express-handlebars')
	var app = express()
	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set('view engine', 'handlebars');

	app.use(express.static(__dirname + '/bower_components'))
	app.use(express.static(__dirname + '/css'))

	app.get('/', function(req, res){
		res.render('feed', {
			helpers: helpers,
			tweets: tweets
		})
	})

	app.listen(3000)
}



