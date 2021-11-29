import request from 'supertest'
import createDbConnection from '../../dbConnection'
const app = require('../../index')

beforeAll(async () => {
    await createDbConnection()
})

test('should return status code 200', async () => {
    const result = await request(app).get("/health")
    expect(result.statusCode).toEqual(203)
})

test('should call the createNotebook function', async () => {
    const res = await request(app).post("/notebook").send({
        name: 'test',
        category: 'test',
        description: 'test'
    })
    expect(res.statusCode).toEqual(201)
})
