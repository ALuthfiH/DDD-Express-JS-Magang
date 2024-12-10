// logger.js
const morganLogger = require("./morgan");
const winstonLogger = require("./winston");

module.exports = {
    morgan: morganLogger,
    winston: winstonLogger,
};