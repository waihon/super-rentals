import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  // This async method is akso known as a model hook.
  // It is responsible for fetching and preparing any data that we need for our route.
  // Ember will automatically call this hook when entering a route.
  // The object returned from this hook is known as the model for the rouote.
  async model() {
    // Use the browser's Fetch API to request JSON data from our
    // server's API at public/api/rentals.json.
    // The Fetch API returns a response object asynchronously.
    let response = await fetch('/api/rentals.json');

    // We knew the server sent the data using the JSON format,
    // so we can use the json() method to parse the response data accordingly.
    // Parsing the reponse data is also an asynchronous operation.
    // JSON:API format returns an array nested under the "data" key
    let { data } = await response.json();

    return data.map((model) => {
      let { id, attributes } = model;
      let type;

      // The data coming from the server is missing the type property,
      // wich previously existed on our hard-coded model object.
      // The type property could either be "Standaline" or "Community",
      // depending on the type of rental property, which is required by
      // our Rental component.
      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      // Return id for the rental route which has a dynamic segment
      return { id, type, ...attributes };
    });
  }
}
