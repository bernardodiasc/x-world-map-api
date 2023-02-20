'use strict';

/**
 * bounty service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bounty.bounty');
