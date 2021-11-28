import request from 'supertest'
const app = require('../../index')

describe('testando o ok do endpoint raiz', () => {
  
    it('o endpoint deve retornar um status 200', async () => {
        const result = await request(app).get("/")
        expect(result.statusCode).toEqual(200)
    })
})