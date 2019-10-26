// Initializes the `MailZone` service on path `/mail/zone`
const { MailZone } = require('./mail-zone.class');
const createModel = require('../../models/mail-zone.model');
const hooks = require('./mail-zone.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mail/zone', new MailZone(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mail/zone');

  service.hooks(hooks);
};
