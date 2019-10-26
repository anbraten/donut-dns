const assert = require('assert');
const app = require('../../src/app');

describe('\'Record\' service', () => {
  it('registered the service', () => {
    const service = app.service('record');

    assert.ok(service, 'Registered the service');
  });
});
