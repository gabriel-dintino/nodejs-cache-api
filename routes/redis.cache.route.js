"use strict";

module.exports = (app) => {
    const redisCacheConfiguration = require("../configurations/redis.cache.configuration");
    const API_VERSION_1 = redisCacheConfiguration.getApiVersion1();
    const controller = require("../controllers/redis.cache.controller");
 
    app.get(`/cache/${API_VERSION_1}/ping`, (req, res) => controller.pong(req, res));
    app.get(`/cache/${API_VERSION_1}/item/:key`, (req, res) => controller.get(req, res));
    app.post(`/cache/${API_VERSION_1}/item`, (req, res) => controller.set(req, res));
    app.delete(`/cache/${API_VERSION_1}/item/:key`, (req, res) => controller.del(req, res));
};