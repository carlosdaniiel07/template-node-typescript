import path from 'path'
import fs from 'fs'

import database from '../database'

export const prepareDatabase = async () => {
  const dbFilePath = path.resolve(__dirname, '..', 'database', 'test_db.sqlite')

  fs.existsSync(dbFilePath) && fs.unlinkSync(dbFilePath)

  await database(process.env.NODE_ENV!)
}

export default {
  prepareDatabase
}
