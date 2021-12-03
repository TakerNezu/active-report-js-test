import fastify from 'fastify'
import {Router} from "./routes";

const server = fastify()

Router(server)

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
