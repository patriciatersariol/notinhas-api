import createDbConnection from '../../dbConnection'
import { getMockReq, getMockRes } from '@jest-mock/express'
import { createNotebook } from '../../controllers/notebook.controller'

beforeAll(async () => {
    await createDbConnection()
})

test('should return 201 with notebook DTO', async () => {
    const req = getMockReq({body: {
        name: 'test',
        category: 'test',
        description: 'test'
    }})
    const { res } = getMockRes()
    
    await createNotebook(req, res)
    
    expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'test',
          category: 'test',
          description: 'test',
        })
    )
})