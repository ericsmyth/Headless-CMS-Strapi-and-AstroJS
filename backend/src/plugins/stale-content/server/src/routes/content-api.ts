export default [
  {
    method: 'GET',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/health',
    // name of the controller file & the method.
    handler: 'controller.getContentHealth',
    config: {
      policies: [],
      description: 'Content Health Check',
    },
  },
];
