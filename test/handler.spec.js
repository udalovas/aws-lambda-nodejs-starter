'use strict';

const { expect } = require('chai');
const handler = require('../lib/handler');

describe('Nodejs Starter Lambda', () => {
    it('should provide status on any event', async () => {
        const result = await handler({}, context);
        expect(result)
            .to.have.property('state')
            .that.is.a('string')
            .that.is.equal('Lambda is ready for an extension!');
    });
});
