// morgan.js
const morgan = require('morgan');
const winstonLogger = require('./winston');

const morganLogger = morgan('combined', {
    stream: {
        write: (message) => winstonLogger.info(message.trim()),
    },
});

module.exports = morganLogger;