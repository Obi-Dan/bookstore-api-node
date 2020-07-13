const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require ('../app.js');
const { expect } = require('chai');

chai.use(chaiHttp);
chai.should();

describe('Bookstore', () => {
    describe('GET /', () => {
        it('Hello World', (done) => {
            chai.request('http://0.0.0.0:8080')
                .get('/')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.body).to.be.equal('Hello World');
                    done();
                });
        });
    });
});