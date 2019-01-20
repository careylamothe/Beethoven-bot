'use strict';

const logger = require('../lib/logger').getLogger('BOT:MESSAGES:DM');
const colors = require('colors/safe');

module.exports = function (opts) {
    logger.debug('Ambient listener initialized');

    return function (bot, message) {
        logger.debug(colors.white('Ambient listener') + ' invoked');
        // bot.reply(message, 'hello');
    };

};
