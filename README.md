# super-rentals

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd super-rentals`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Terminal Commands

### 1. Orientation

* `ember new super-rentals --lang en`
* `cd super-rentals`
* `ember server`

### 2. Building Pages

* No terminal commands

### 3. Automated Testing

* `ember generate acceptance-test super-rentals`
* `ember test --server` (or `ember t -s` for short)

### 4. Component Basics

* `ember generate component-test jumbo`

### 5. More About Components

* `ember generate component rental`
* `ember generate component-class rental` to add a class e.g. rental.js
* `ember generate component rental/image`

### 6. Interactive Components

* `ember generate component-class rental/image`

### 7. Reusable Components

* `ember generate component map --with-component-class` or `ember g component map -gc` for short

### 8. Working with Data

* No terminal commands

### 9. Route Params

* `ember generate component rental/detailed`