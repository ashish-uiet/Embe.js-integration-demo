import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dockers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dockers');
    assert.ok(route);
  });
});
