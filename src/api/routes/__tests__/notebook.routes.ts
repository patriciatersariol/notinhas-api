import request from 'supertest'
import createDbConnection from '../../../dbConnection'
const app = require('../../../index')

beforeAll(async () => {
    await createDbConnection()
})

test('should return status code 200 and OK response', async () => {
    const response = await request(app).get("/health")
    expect(response.statusCode).toEqual(200)
    expect(response.body).toBe("OK")
})

test('should call the createNotebook function', async () => {
    const res = await request(app).post("/notebook").send({
        name: 'test',
        category: 'test',
        description: 'test'
    })
    expect(res.statusCode).toEqual(201)
})
