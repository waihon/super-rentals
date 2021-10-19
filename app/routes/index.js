import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  // Ember Data provides a store service, which we can inject into our route
  // using the @service store declaration, making the Ember Data store
  // available as this.store.
  // The Ember Data store acts as a kind of intermediary between out app and the
  // server; it does many important things, including caching the resposnes taht
  // were fetched from the server.

  @service store;

  // This async method is akso known as a model hook.
  // It is responsible for fetching and preparing any data that we need for our route.
  // Ember will automatically call this hook when entering a route.
  // The object returned from this hook is known as the model for the rouote.
  async model() {
    // findAll method takes the model type as an argument and fetches all records
    // of that type from the store.
    return this.store.findAll('rental');
  }
}
