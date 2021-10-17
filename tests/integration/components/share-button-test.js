import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

class MockRouterService extends Service {
  get currentURL() {
    return '/foo/bar?baz=true#some-section';
  }
}

module('Integration | Component | share-button', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    // When our component is rendered and requests the router service
    // to be injected, it will get an instance of our MockRouterService
    // instead of the built-in router service.
    // This is a pretty common testing technique called mocking or
    // Stubbing. Our MockRouterService implements the same interface
    // as the built-in router service - the part that we care about
    // anyway; which is that it has a currentURL property that reports
    // the current "logical" URL. This allow us to fix the URL at a
    // pre-determined value, making it possible to easily test our
    // component without having to navigate to a different page.
    // By using service injections and mocks, Ember allows us to build
    // loosely coupled components that can each be tested in isolation,
    // which acceptance tests provide end-to-end coverage that ensures
    // that these components do inddeed work well together.
    this.owner.register('service:router', MockRouterService);
  });

  test('basic usage', async function (assert) {
    await render(hbs`<ShareButton>Tweet this!</ShareButton>`);

    assert
      .dom('a')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'external nofollow noopener noreferrer')
      .hasAttribute(
        'href',
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          new URL('/foo/bar?baz=true#some-section', window.location.origin)
        )}`
      )
      .hasClass('share')
      .hasClass('button')
      .containsText('Tweet this!');
  });
});
