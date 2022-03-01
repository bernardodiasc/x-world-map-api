'use strict';

/**
 * location service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::location.location', ({ strapi }) => ({
  async find(params) {
    const { results, pagination } = await super.find({ ...params, populate: ['user'] });

    return { results, pagination };
  }
}));
