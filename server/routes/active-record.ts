import {FastifyReply, FastifyRequest} from "fastify";
import editJsonFile from 'edit-json-file'

export default (server: any, options: any, next: any): void => {
  server.get('/active-record', {
    handler: (request: FastifyRequest, reply: FastifyReply) => {
      // json file を読み込み
      const data = editJsonFile('../db/db.json')
      reply.send(data)
    }
  })
  server.post('/active-record', {
    // eslint-disable-next-line no-unused-vars
    handler: (request: FastifyRequest, reply: FastifyReply) => {
      // json file を読み込み
      const data = editJsonFile('../db/db.json')
      const req = request.query as {taxExemptLocation: string}
      data.set('taxExemptLocation', req.taxExemptLocation)
    }
  })

  next();
}