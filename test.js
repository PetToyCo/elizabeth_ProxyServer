const app = require('./server.js');
const supertest = require('supertest');
const request = supertest(app);

describe('Express server', () => {

  it('gets the /product endpoint', async (done) => {
    var response = await request.get('/product?itemID=100')

    expect(response.status).toBe(200);
    done();
  });

  it('should get a 404 error if an invalid item id is provided', async (done) => {
    var response = await request.get('/product?itemID=200')

    expect(response.status).toBe(404);
    done();
  });

  it('should not get the /descriptionObject endpoint', async (done) => {
    var response = await request.get('/descriptionObject/100')

    expect(response.status).toBe(404);
    done();
  });

})