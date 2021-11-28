import 'reflect-metadata'

import { createConnection } from 'typeorm'

export default async function createDbConnection() {
    const connection = await createConnection()
}