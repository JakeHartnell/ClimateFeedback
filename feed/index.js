var _ = require('lodash'),
	feed = require('./tweet_feed')

var express = require('express')
var exphbs = require('express-handlebars')
var app = express()
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/bower_components'))
app.use(express.static(__dirname + '/css'))

var helpers = {
	each: function(items, options) {
		return _.map(items, options.fn).join('')
	}
}

var tweets = []
feed.on('change', function (new_tweets) {
	tweets = new_tweets
})

app.get('/', function(req, res){
	res.render('feed', {
		helpers: helpers,
		tweets: tweets
	})
})
app.listen(3000)
console.log('Listening on localhost:3000')
