import {FastifyReply, FastifyRequest} from "fastify";
import {jsonData, dataSet} from '../db'

export default (server: any, options: any, next: any): void => {
  server.get('/active-record', {
    handler: (request: FastifyRequest, reply: FastifyReply) => {
      // json file を読み込み
      reply.send(jsonData)
    }
  })
  server.post('/active-record', {
    // eslint-disable-next-line no-unused-vars
    handler: (request: FastifyRequest, reply: FastifyReply) => {
      // json file を読み込み
      const req = request.query as {taxExemptLocation: string}
      console.log(request.query)
      dataSet('taxExemptLocation', req.taxExemptLocation)
      reply.send('ok')
    }
  })

  next();
}