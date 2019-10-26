// Initializes the `Zone` service on path `/zone`
const { Zone } = require('./zone.class');
const createModel = require('../../models/zone.model');
const hooks = require('./zone.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/zone', new Zone(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('zone');

  service.hooks(hooks);
};
