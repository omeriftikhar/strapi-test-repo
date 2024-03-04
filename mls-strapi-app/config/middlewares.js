module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      // TODO: Fix them before pushing
      origin: ['http://localhost:3033', 'http://localhost:1337', 'https://prized-novelty-81ba326ac2.strapiapp.com']
    }
  },
];
