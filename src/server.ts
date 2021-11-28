import { createConnection } from 'typeorm'

const app = require('./index')
createConnection()
app.listen(3000, () => console.log('Server running on port 3000'))