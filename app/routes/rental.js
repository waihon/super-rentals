import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    // findRecord method takes a model type and a model ID as arguments
    // and fetches a single record from the store.
    return this.store.findRecord('rental', params.rental_id);
  }
}
