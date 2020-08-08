import 'reflect-metadata'
import { createConnection } from 'typeorm'

// entities
import { Auth } from './../models/Auth'

export default () => {
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
