const assert = require('assert');
const app = require('../../src/app');

describe('\'seeders\' service', () => {
  it('registered the service', () => {
    const service = app.service('seeders');

    assert.ok(service, 'Registered the service (seeders)');
  });
});
