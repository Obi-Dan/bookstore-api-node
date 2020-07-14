const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, HOST, PORT } = require ('../app');
const { expect } = require('chai');

const BASE_URI = `http://${HOST}:${PORT}`;

chai.use(chaiHttp);
chai.should();

describe('Bookstore', () => {
    describe('GET /', () => {
        it('Hello World', (done) => {
            chai.request(BASE_URI)
                .get('/')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.eql(200);
                    expect(res.body.message).to.be.equal('Hello World');
                    done();
                });
        });
    });
});