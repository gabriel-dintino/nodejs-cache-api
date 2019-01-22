"use strict";

let handler = require("../handlers/redis.cache.handler")

module.exports = {
    pong : (req, res) => handler.ping(req, res),
    get: (req, res) => handler.get(req, res),
    set: (req, res) => handler.set(req, res),
    del: (req, res) => handler.del(req, res)
}
