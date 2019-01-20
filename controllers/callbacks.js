'use strict';

const colors = require('colors/safe');
const logger = require('../lib/logger').getLogger('BOT.CONTROLLERS.CALLBACKS');

module.exports = {
    interactiveMessage: interactiveMessage
};

function interactiveMessage(opts) {
    return function (bot, message) {
        logger.info(colors.white('interactiveMessage') + ' callback invoked.', message);
    };
}
