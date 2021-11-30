import createDbConnection from "./dbConnection"
const app = require('./express.config')
createDbConnection()
app.listen(3000, () => console.log('Server running on port 3000'))


/*

1. Testar outras camadas do endpoint POST /notebook
- notebook controller
- notebook services
- notebook repository

2. Terminar CRUD de notebook (com testes)
- editar
- deletar
- procurar pelo ID

3. Separar notes em camadas
- controllers/services/repositories

4. Terminar CRUD de note (com testes)
- editar
- deletar
- procurar pelo ID


*/