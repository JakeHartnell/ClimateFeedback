# Feed Setup

## Twitter API

Export globals to script environment, with the
values provided by dev.twitter.com:

CF_CONSUMER_KEY
CF_CONSUMER_SECRET
CF_TOKEN
CF_TOKEN_SECRET

## Redis

Twitter's API has very strict rate limitations, so we're caching popular tweets using Redis.

To install Redis on OSX:

```
brew install redis
redis-server (starts Redis)
redis-cli (open CLI)
```

Test Redis:

```
redis-cli
> set foo bar
> get foo
	==> "bar"
```

## Setup

```
git clone <repo>
npm install
```

## Run

```
node index.js
```

Navigate to [localhost:3000](localhost:3000).