// Initializes the `Record` service on path `/record`
const { Record } = require('./record.class');
const createModel = require('../../models/record.model');
const hooks = require('./record.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/record', new Record(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('record');

  service.hooks(hooks);
};
