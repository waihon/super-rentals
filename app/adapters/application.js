import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // Our resource URLs have an extra /api namespace prefix.
  // Adding a namespace prefix happens to be pretty common across Emebr apps,
  // so the JSONAdapter has an API to do just that. All we need to do is to set
  // the namespace property to the prefix we want, which is api in our case.
  namespace = 'api';

  buildURL(...args) {
    // Our resource URLs have a .json extension at the end.
    // Adding the .json extension is a bit less common, and doesn't have a
    // declarative configuration API of its won. Instead, we will need to override
    // Ember Data's buildURL method. Inside of buildURL, we will call
    // super.buildURL(...args) to invoke the JSONAPIAdapter default implementation
    // of the buildURL. This will give us the URL that the adapter would have build
    // after configuring the namespace above. All we have to do is to append .json
    // to his URL and return it.
    return `${super.buildURL(...args)}.json`;
  }
}
