const assert = require('assert');
const app = require('../../src/app');

describe('\'MailZone\' service', () => {
  it('registered the service', () => {
    const service = app.service('mail/zone');

    assert.ok(service, 'Registered the service');
  });
});
