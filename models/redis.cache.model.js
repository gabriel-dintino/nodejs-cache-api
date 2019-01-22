"use strict";

const configuration = require("../configurations/redis.cache.configuration");
let redis = require("ioredis");
let cache = new redis({
    port: configuration.getCachePort(),
    host: configuration.getCacheHost(),
    db: configuration.getDb(),
    retryStrategy: configuration.getMaxRetry()
});

module.exports = {
    get: (key) => {
        return new Promise((resolve, reject) => {
            cache.get(key, (err, value) => {
                if (err) return reject({
                    error: "Error en getKey",
                    message: err.toString()
                });
                resolve(value);
            });
        });
    },
    set: (key, value, ttl) => {
        return new Promise((resolve, reject) => {
            if (ttl !== undefined) {
                cache.set(key, value, 'EX', ttl, (err) => {
                    if (err) return reject({
                        error: "Error en setKey with EX",
                        message: err
                    });
                    resolve();
                });
            } else {
                cache.set(key, value, (err) => {
                    if (err) return reject({
                        error: "Error en setKey",
                        message: err.toString()
                    });
                    resolve();
                })
            }
        });
    },
    del: (key) => {
        return new Promise((resolve, reject) => {
          redis.del(key, (err) => {
            if (err) return reject({
              error: "Error en deleteKey",
              message: err.toString()
            });
            resolve();
          });
        });
      }
}