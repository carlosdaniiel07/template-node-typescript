import 'reflect-metadata'
import { createConnection } from 'typeorm'

import path from 'path'

// entities
import { Auth } from './../models/Auth'

export default (env: string) => {
  if (env === 'test') {
    return createConnection({
      type: 'sqlite',
      database: path.resolve(__dirname, 'test_db.sqlite'),
      synchronize: true,
      entities: [
        Auth
      ]
    })
  } else {
    return createConnection({
      name: 'default',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'my_db',
      synchronize: true,
      entities: [
        Auth
      ]
    })
  }
}
