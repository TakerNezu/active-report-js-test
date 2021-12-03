import fastify from 'fastify';
import activeRecordRoutes from './active-record';

export function Router(server: ReturnType<typeof fastify>): void {
  server.register(activeRecordRoutes);
}