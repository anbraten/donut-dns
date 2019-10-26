const assert = require('assert');
const app = require('../../src/app');

describe('\'Zone\' service', () => {
  it('registered the service', () => {
    const service = app.service('zone');

    assert.ok(service, 'Registered the service');
  });
});
