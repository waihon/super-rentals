import JSONAPISerializer from '@ember-data/serializer/json-api';

// Adapters and serializers are always added together as a pair. We added
// an application adapter, so we also add a corresponding serializer to
// go with it as well. Since the JSON data returned by our server is
// JSON:API-compliant, the default JSONAPISerializer work just fine for us
// without further customization.
export default class ApplicationSerializer extends JSONAPISerializer {}
