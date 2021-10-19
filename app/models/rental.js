import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  // The attributes declared here correspond directly to the attributes
  // data we expect the server to provide in its responses.
  // Attributes declared with the @attur decorator work with the auto-track
  // feature. Therefore, we are free to reference any model attributes in
  // our getter (this.category), and Ember will know when ot invalidate
  // its result.
  // In addition to those declared here, there will always be an implicit
  // id attribute as well, which is used to uniquely identify the model
  // object and can be accessed using model.id for example.
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
