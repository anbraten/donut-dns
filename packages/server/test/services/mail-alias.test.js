const assert = require('assert');
const app = require('../../src/app');

describe('\'MailAlias\' service', () => {
  it('registered the service', () => {
    const service = app.service('mail/alias');

    assert.ok(service, 'Registered the service');
  });
});
