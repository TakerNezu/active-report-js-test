import {config} from 'dotenv'
const result = config()

if (result.error) {
  throw result.error
}

import fastify from 'fastify'
import cors from 'fastify-cors'
import {Router} from './routes'

const server = fastify({logger: true})

Router(server)
server.register(cors) //全許可のため本番ではオプション指定必須

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
