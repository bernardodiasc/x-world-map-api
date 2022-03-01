'use strict';

/**
 * profile service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::profile.profile', ({ strapi }) => ({
  async find(params) {
    const { results, pagination } = await super.find({
      ...params,
      populate: {
        locations: {
          orderBy: {
            since: 'asc'
          }
        }
      }
    });
    return { results, pagination };
  }
}));

