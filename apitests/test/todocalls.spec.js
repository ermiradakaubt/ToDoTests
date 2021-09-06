const request = require('supertest')('https://jsonplaceholder.typicode.com');
const assert = require('chai').assert;

it('GET /users', () => {
    // Make a GET request to the users route 
    return request
        .get('/users')
        .expect(200)
        .then((res) => {
            // assert data bieng return to not be empty
            assert.isNotEmpty(res.body);
        });
});

it('GET /todos/1', () => {
    // Make a GET request to the todo/1 route 
    return request
        .get('/todos')
        .expect(200)
        .then((res) => {
            // assert data bieng return to not be empty
            assert.isNotEmpty(res.body);
        });
});

it('GET /posts', () => {
    // Make a GET request 
    return request
        .get('/posts')
        .expect(200)
        .then((res) => {
            // assert data bieng return to not be empty
            assert.isNotEmpty(res.body);
        });
});
it('POST /users', () => {
    const data = {
        name: 'Test Ermira',
        email: 'test_user@test.com',
    };
    // Make a POST request t
    return request
        .post('/users')
        .send(data) // send payload data
        .then((res) => {
            assert.hasAnyKeys(res.body, 'id');
            assert.equal(res.body.name, data.name);
            assert.equal(res.body.email, data.email);

        });
});

it('POST /posts', () => {
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    // Make a POST request t
    return request
        .post('/posts')
        .send(data) // send payload data
        .then((res) => {
            //  console.log(res.body)
            assert.equal(res.body.title, data.title);
            assert.equal(res.body.body, data.body);

        });
});
it('PUT /posts', () => {
    const data = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    // Make a PUT request
    return request
        .put('/posts/1')
        .send(data) // send payload data
        .then((res) => {
            //     console.log(res.body)
            assert.equal(res.body.title, data.title);
            assert.equal(res.body.body, data.body);

        });
});
it('PATCH /posts', () => {
    const data = {
        title: 'foo',
    };
    // Make a PATCH request
    return request
        .patch('/posts/1')
        .send(data) // send payload data
        .then((res) => {
            //       console.log(res.body)
            assert.equal(res.body.title, data.title);

        });
});