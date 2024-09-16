import { app } from '../../server';
import { healthCheck } from './health-check.route';

export const healthCheckRoutes = async () => {
  app.register(healthCheck);
};
