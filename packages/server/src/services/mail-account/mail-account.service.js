// Initializes the `MailAccount` service on path `/mail/account`
const { MailAccount } = require('./mail-account.class');
const createModel = require('../../models/mail-account.model');
const hooks = require('./mail-account.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mail/account', new MailAccount(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mail/account');

  service.hooks(hooks);
};
