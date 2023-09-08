const { Seeders } = require('./seeders.class');
const createModel = require('../../models/seeders.model');
const hooks = require('./seeders.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/seeders', new Seeders(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('seeders');

  service.hooks(hooks);
};