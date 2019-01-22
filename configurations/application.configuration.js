"use strict";

module.exports = {
    getApplicationPort : () => process.env.NODEJS_API_CACHE_SERVER_PORT || 8080,
    getCacheSystemName : () => process.env.NODEJS_API_CACHE_SYSTEM_NAME || "REDIS"
}