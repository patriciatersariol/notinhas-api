import 'reflect-metadata'

import { createConnection, getConnectionOptions } from 'typeorm'

export default async function createDbConnection() {
    const connectionOptions = await getConnectionOptions(process.env.NODE_ENV)
    return await createConnection({...connectionOptions, name:"default"})
}