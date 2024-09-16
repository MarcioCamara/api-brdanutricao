import { FastifyInstance } from 'fastify';

export const healthCheck = async (app: FastifyInstance) => {
  app.get('/', () => {
    return 'STATUS:UP';
  });

  app.get('/health-check', () => {
    return 'STATUS:UP';
  });
};
