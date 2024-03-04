'use strict';

/**
 * empty-state router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::empty-state.empty-state');
