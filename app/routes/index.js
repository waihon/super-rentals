import Route from '@ember/routing/route';

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
    let parsed = await response.json();

    return parsed;
  }
}