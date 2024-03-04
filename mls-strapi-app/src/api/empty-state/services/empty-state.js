'use strict';

/**
 * empty-state service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::empty-state.empty-state');
