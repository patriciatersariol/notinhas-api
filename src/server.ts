import createDbConnection from "./dbConnection"
const app = require('./index')
createDbConnection()
app.listen(3000, () => console.log('Server running on port 3000'))