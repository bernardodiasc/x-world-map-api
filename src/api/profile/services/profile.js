'use strict';

/**
 * profile service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::profile.profile', ({ strapi }) => ({
  async find(params) {
    // TO DO:
    // - fix location sorting order by since date
    // - do not return profiles with empty user
    const { results, pagination } = await super.find({
      ...params,
      populate: {
        locations: {
          orderBy: {
            since: 'DESC'
          }
        }
      }
    });
    return { results, pagination };
  }
}));
