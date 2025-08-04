import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('stale-content')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },
  
  async getContentHealth(ctx) {
     const healthData = await strapi
      .plugin('stale-content')
      .service('service')
      .getContentHealth();

      ctx.body = {
        health: healthData,
        timestamp: new Date().toISOString()
      }
  },
});

export default controller;
