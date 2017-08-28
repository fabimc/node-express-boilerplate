const mongoose = require('mongoose');
const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
let client;

const cache = () => {
  if (!client) {
    client = redis.createClient(6379, '127.0.0.1');
  }
  return client;
};

const connect = () => {
  if (!mongoose.connection.readyState) {
    mongoose.connect('mongodb://localhost/users');
  }
};

module.exports = { cache, connect };
