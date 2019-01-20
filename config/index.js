'use strict';

const logger = require('../lib/logger').getLogger('CONFIG');
const colors = require('colors/safe');

module.exports = {
    env: getEnvironment(),
    debug: (process.env.DEBUG || false),
    slack: {
        token: (process.env.SLACK_TOKEN || null),
    },
    nlp: {
        LUIS_APP_ID: (process.env.LUIS_APP_ID || null),
        LUIS_SUB_KEY: (process.env.LUIS_SUB_KEY || null)
    }
};

function getEnvironment() {
    let known_environments = ['local', 'development', 'production'];
    let env = process.env.NODE_ENV || null;
    if (env === null) {
        logger.info('No environment specified; defaulting to ' + colors.white('development'));
        env = 'development';
    } else if (known_environments.indexOf(env) === -1) {
        logger.warn('Unknown environment ' + colors.white('%s') + '; defaulting to ' + colors.white('development'), env);
        env = 'development';
    }
    return env;
}
