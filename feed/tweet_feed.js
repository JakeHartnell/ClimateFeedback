var redis = require("redis").createClient(),
	Twitter = require('twit'),
	env = process.env

var REDIS_KEY = 'popular-tweets-86',
	REDIS_LIFETIME = 60, // seconds
	QUERY = 'climate wsj.com OR foxnews.com OR cnn.com',
	tweets = false,
	callback = function () {}

/**
 * Attempt to load tweets from Redis, and
 * 	call Twitter's API if that fails.
 */
redis.get(REDIS_KEY, function (err, tweets) {
	tweets = JSON.parse(tweets)
	if (tweets) {
		callback(tweets)
		return
	}

	// These details will need to have been set
	// 	in the script environment.
	var twit = new Twitter({
		consumer_key: env.CF_CONSUMER_KEY,
		consumer_secret: env.CF_CONSUMER_SECRET,
		access_token: env.CF_TOKEN,
		access_token_secret: env.CF_TOKEN_SECRET
	})
	twit.get('search/tweets', {
		q: QUERY,
		count: 100,
		result_type: 'popular'
	}, function(err, data, response) {
		tweets = data.statuses
		redis.set(REDIS_KEY, JSON.stringify(tweets))
		redis.expire(REDIS_KEY, REDIS_LIFETIME)
		callback(tweets)
	})
})

exports.on = function (event, cbk) {
	callback = cbk
	if (tweets)
		callback(tweets)
}