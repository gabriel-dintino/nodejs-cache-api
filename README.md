# ReST API for Redis

This is an implementetation of ReST API for Redis.

Redis Dockerized
1- docker run --name <container-name> -d redis  (expose 6379ñ)

docker run --name my-redis -d redis
docker run -d --name my-redis redis --bind 127.0.0.1

docker run -it --link my-redis:redis --rm redis redis-cli -h redis -p 6379

# Environment variables

REDIS_CACHE_SERVER_PORT=6379
REDIS_CACHE_SERVER_HOST="127.0.0.1"
REDIS_CACHE_SERVER_DB=0
REDIS_CACHE_SERVER_MAX_RETRY=0

NODEJS_API_CACHE_SERVER_PORT=8080,
NODEJS_API_CACHE_SYSTEM_NAME="REDIS"