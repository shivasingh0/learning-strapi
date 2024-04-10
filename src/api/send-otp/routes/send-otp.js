'use strict';

/**
 * send-otp router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::send-otp.send-otp');
