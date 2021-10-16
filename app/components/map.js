import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment'

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
  // We do not explicitly mark getters as @tracked. Unlike instance variables,
  // getters cannot be assigned a new value directly, so it does not make sense
  // for Ember to minotor them for changes.
  // Glimmer component superclass, via a feature known as auto-track, marks
  // all arguments that can be accessed from this.args as @tracked.
  get src() {
    // We have access to our component's arguments using this.args.* API
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    // URL-encode the token, just in case it contains any
    // special characters that are not URL-safe.
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
