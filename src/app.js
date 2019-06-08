'use strict';

const handler = async (event, context) => {
    return {
        state: 'Lambda is ready for an extension!'
    };
};

module.exports.handler = handler;
