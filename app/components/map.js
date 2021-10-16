import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment'

export default class MapComponent extends Component {
  get token() {
    // URL-encode the token, just in case it contains any
    // special characters that are not URL-safe.
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
