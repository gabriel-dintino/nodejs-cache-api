"use strict";

const cache = require("../models/redis.cache.model");

module.exports = {
    ping: (req, res) => res.status(200).json("pong"),
    get: async (req, res) => {
        let {key} = req.params;
        let value = await cache.get(key);
        res.status(200).json(`key: ${key} - value: ${value}`);
    },
    set: async (req, res) => {
        let payload = req.body;
        let {key} = payload;
        let {value} = payload;
        res.status(200).json(cache.set(key, value));
    },
    del: (req, res) => {
        let {key} = req.params;
        res.status(200).json(cache.del(key));
    }
}