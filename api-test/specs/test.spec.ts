/// <reference types="node" />;

import { addContextToReport } from '../utils/reporter';
const request = require('supertest');
const expect = require('chai').expect;

describe('GET /user', function () {
	it('should respond with a json of employee objects', async function () {
		let res = await request('https://hub.dummyapis.com')
			.get('/employee?noofRecords=10&idStarts=1001').expect('Content-Type', /json/)
			.expect(200);
		addContextToReport(this, res);
		expect(res.body[0]).to.have.property('lastName');

		res = await request('https://hub.dummyapis.com')
			.get('/employee?noofRecords=10&idStarts=100').expect('Content-Type', /json/)
			.expect(200);
		addContextToReport(this, res);
	});
	it('should add a user', async function () {
		let res = await request('https://dummy.restapiexample.com')
			.post('/api/v1/create')
			.set('Accept', 'application/json')
			.send({ name: 'Samuel', salary: '123', age: '23' })
			.expect(200);
		addContextToReport(this, res);

		res = await request('https://dummy.restapiexample.com')
			.get('/api/v1/employees')
			.set('Accept', 'application/json')
			.expect(200);
		addContextToReport(this, res);
	});
});
