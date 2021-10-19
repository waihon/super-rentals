import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  // Services are scoped to the app, instead of all the
  // JavaScript code that is running on the same page.
  // This allows us to have multiple scripts running on
  // the same page without interfering with each other.
  // Besides, services are designed to be easily swappable.
  // Injects the router service into the component, making it
  // available to us as this.router.
  @service router;

  get currentURL() {
    // currentURL provides the current "logical" and relative URL,
    // so we would have to join it with window.location.origin
    // to get an absolute URL that we can share.
    return new URL(this.router.currentURL, window.location.origin);
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
