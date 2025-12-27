// Supertest is a library for testing HTTP servers. It lets you send HTTP requests 
// (like GET, POST) to your Express app and check the responses.
const request = require('supertest');
const app = require('../src/app')

// This groups related tests. Here, it’s for the server’s behavior.
describe('Server',() => {
    // This is a single test case. It checks that your server returns the 
    // expected response when you make a GET request to '/'.
    it('should return a welcome message', async () => {
        // This sends a GET request to the root (/) of your app and waits for the response.
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Backend deepdive');
    })
})