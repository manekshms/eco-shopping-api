const path = require("path");

const dotenv = require('dotenv');

const nodeEnv = process.env.NODE_ENV || 'development';

const results = dotenv.config({path: path.resolve(__dirname, "../../", `.env.${nodeEnv}`)});
if(!results) {
    throw new Error('Can\'t find env file');
}