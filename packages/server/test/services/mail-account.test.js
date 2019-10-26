const assert = require('assert');
const app = require('../../src/app');

describe('\'MailAccount\' service', () => {
  it('registered the service', () => {
    const service = app.service('mail/account');

    assert.ok(service, 'Registered the service');
  });
});
