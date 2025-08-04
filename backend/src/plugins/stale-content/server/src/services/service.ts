import type { Core } from '@strapi/strapi';

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
//Get category, author, image
async getContentHealth() {
  try {
    const withoutCategory = await strapi.query('api::article.article').count({
      where: {
        category: { $null: true },
        publishedAt: { $notNull: true }
      }
    });

    const withoutAuthor = await strapi.query('api::article.article').count({
      where: {
        author: { $null: true },
        publishedAt: { $notNull: true }
      }
    });

    const withoutFeaturedImage = await strapi.query('api::article.article').count({
      where: {
        featuredImage: { $null: true },
        publishedAt: { $notNull: true }
      }
    });

    return {
      issues: {
        orphanedContent: {
          withoutCategory,
          withoutAuthor
        },
        missingMetadata: {
          withoutFeaturedImage
        }
      },
      totalIssues: withoutCategory + withoutAuthor + withoutFeaturedImage,
      lastChecked: new Date().toISOString()
    };

  } catch (error) {
    strapi.log.error('Get content health error:', error);
    throw(error);
  }
}

});





export default service;
