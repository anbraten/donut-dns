// Initializes the `MailAlias` service on path `/mail/alias`
const { MailAlias } = require('./mail-alias.class');
const createModel = require('../../models/mail-alias.model');
const hooks = require('./mail-alias.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mail/alias', new MailAlias(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mail/alias');

  service.hooks(hooks);
};
