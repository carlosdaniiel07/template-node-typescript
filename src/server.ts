import app from './app'
import database from './database'

database()
  .then(_ => {
    console.log('[!] Database conected')

    app.listen(process.env.PORT || 3000, () => {
      console.log('[!] Server is running')
    })
  })
  .catch(err => {
    console.error(`[!] Database connection error: ${err}`)
  })
