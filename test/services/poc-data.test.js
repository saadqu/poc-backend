const assert = require('assert');
const app = require('../../src/app');

describe('\'poc-data\' service', () => {
  it('registered the service', () => {
    const service = app.service('poc-data');

    assert.ok(service, 'Registered the service');
  });
});
