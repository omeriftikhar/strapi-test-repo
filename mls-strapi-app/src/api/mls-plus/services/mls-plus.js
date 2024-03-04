'use strict';

/**
 * mls-plus service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mls-plus.mls-plus');
