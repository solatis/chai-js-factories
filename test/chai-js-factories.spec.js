if (!chai) {
    var jsFactories     = require('js-factories');
    var chai            = require('chai');
    var chaiJsFactories = require('..');
    chai.use(chaiJsFactories);
}

describe('chai::factory', function () {
    it('attaches to chai', function () {
        chai.assert.property(chai, 'factory');
        chai.expect(chai.factory).to.respondTo('define');
        chai.expect(chai.factory).to.respondTo('create');
        chai.expect(chai.factory).to.respondTo('resetFactories'); 
    });
})
