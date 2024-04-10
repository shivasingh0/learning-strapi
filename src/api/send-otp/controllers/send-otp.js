'use strict';

/**
 * send-otp controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send-otp.send-otp');
