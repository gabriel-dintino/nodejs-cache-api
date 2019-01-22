"use strict";

module.exports = {
    getApiVersion1: () => "V1",
    getCachePort: () => process.env.REDIS_CACHE_SERVER_PORT || 6379,
    getCacheHost: () => process.env.REDIS_CACHE_SERVER_HOST || "127.0.0.1",
    getDb: () => process.env.REDIS_CACHE_SERVER_DB || 0,
    getMaxRetry: () => process.env.REDIS_CACHE_SERVER_MAX_RETRY || 0
}



