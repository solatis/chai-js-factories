# Chai Js Factories
[![NPM Version](https://fury-badge.herokuapp.com/js/js-factories.png)](http://badge.fury.io/js/chai-js-factories)

Chai Js Factories adds support of [js-factories](https://github.com/matthijsgroen/js-factories) to [Chai](http://chaijs.com/). In essence it's a wrapper around the js-factories library and makes it available within the Chai namespace.

## Installation
This plugin is available through the NPM repository.

## Example

```javascript
chai.factory.define('testFactory', function (args) { 
  return new TestFactory(_.extend({foo: 'bar'}, args));
});

console.log(chai.factory.create('testFactory'));
console.log(chai.factory.create('testFactory', {wom: 'bat'}));
console.log(chai.factory.create('testFactory', {foo: 'wombat'}));
```

This works as expected, overriding the default arguments when they are provided at creation time. For more documentation about these factories, take a look at [the documentation of js-factories](https://github.com/matthijsgroen/js-factories/blob/master/README.md).
