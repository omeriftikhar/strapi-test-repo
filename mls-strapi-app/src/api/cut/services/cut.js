'use strict';

/**
 * cut service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cut.cut');
