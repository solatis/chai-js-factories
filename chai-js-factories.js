(function(context, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof exports === 'object') {
    // Node
    module.exports = function(chai, utils) {
      return factory(require('js-factories'), chai, utils);
    }
  } else {
    if (!context.chai) {
      throw new Error(['Chai could not be found in the current scope. Please ensure Chai is loaded',
                      'before the chai-js-factories script.'].join(''));
    }

    if (typeof context.Factory !== 'object') {
      throw new Error(['Please include `js-factories` globally as a script, and ensure it is',
                      'exported as the global `Factory` function.'].join(''));
    }

    context.chai.use(function(chai, utils) {
      return factory(Factory, chai, utils);
    });
  }
}(this, function(Factory, chai /*, utils */) {
  'use strict';

  if (typeof Factory !== 'object') {
    if (typeof define === 'function' && define.amd) {
      throw new Error('Please pass `js-factories` to the function exported by `chai-js-factories`.');
    } else {
      throw new Error('Unknown error: Cannot find the `js-factories` library.');
    }
  }

  chai.factory = Factory;
}));
