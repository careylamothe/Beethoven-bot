'use strict';

const winston = require('winston');
const colors = require('colors/safe');
const loggers = {};

let log_level = 'info';
const t_console = new winston.transports.Console({
    colorize: true,
    level: 'info'
});

module.exports = {
    setLogLevel: setLogLevel,
    getLogger: getLogger
};

function setLogLevel(level) {
    let transports;
    Object.keys(loggers).forEach((k, i) => {
        transports = loggers[k].transports;
        Object.keys(transports).forEach((t, j) => {
            loggers[k].transports[t].level = level;
        });
    });
}

function getLogger(context) {
    context = (typeof context === 'undefined') ? 'default' : context;

    let l = (loggers[context] || null);
    if (null === l) {
        l = new winston.Logger({
            transports: [
                t_console
            ]
        });

        if (context !== 'default') {
            l.filters.push(function (level, msg, meta) {
                return colors.cyan('[' + context + '] ') + msg;
            });
        }

        loggers[context] = l;
    }
    return l;
}
