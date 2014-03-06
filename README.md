# Chai Js Factories
Chai Js Factories adds support of [Js-Factories](https://github.com/matthijsgroen/js-factories)to [Chai](http://chaijs.com/). In essence it's a wrapper around the js-factories library and makes it available within the Chai namespace.

## Example

```javascript
chai.factory.define('testFactory', function (args) { 
  return new TestFactory(_.extend({foo: 'bar'}, args));
});

console.log(chai.factory.create('testFactory'));
console.log(chai.factory.create('testFactory', {wom: 'bat'}));
console.log(chai.factory.create('testFactory', {foo: 'wombat'}));
```

This works as expected, overriding the default arguments when they are provided at creation time.
