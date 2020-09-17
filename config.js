
require('dotenv').config()

const config = {};

config.endpoint = process.env.GM_ENDPOINT;
config.authKey = process.env.GM_AUTHKEY;
config.database = process.env.GM_DATABASE;
config.collection = process.env.GM_COLLECTION;

module.exports = config;