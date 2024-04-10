'use strict';

/**
 * send-otp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::send-otp.send-otp');
