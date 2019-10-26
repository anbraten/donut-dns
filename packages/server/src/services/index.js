const users = require('./users/users.service.js');
const zone = require('./zone/zone.service.js');
const record = require('./record/record.service.js');
const mailAccount = require('./mail-account/mail-account.service.js');
const mailAlias = require('./mail-alias/mail-alias.service.js');
const mailZone = require('./mail-zone/mail-zone.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(zone);
  app.configure(record);
  app.configure(mailAccount);
  app.configure(mailAlias);
  app.configure(mailZone);
};
