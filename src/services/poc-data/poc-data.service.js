// Initializes the `poc-data` service on path `/poc-data`
const createService = require('feathers-sequelize');
const createModel = require('../../models/poc-data.model');
const hooks = require('./poc-data.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/poc-data', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('poc-data');

  service.hooks(hooks);
};
