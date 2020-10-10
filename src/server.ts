import dotenv from 'dotenv'

import app from './app'
import database from './database'
import jobs from './jobs'

dotenv.config()

database(process.env.NODE_ENV!)
  .then(_ => {
    console.log('[!] Database conected')

    app.listen(process.env.PORT || 3000, () => {
      jobs()

      console.log('[!] Server is running')
    })
  })
  .catch(err => {
    console.error(`[!] Database connection error: ${err}`)
  })
