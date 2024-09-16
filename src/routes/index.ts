import { app } from '../server';
import { exercisesRoutes } from './exercises';
import { healthCheckRoutes } from './health-check';

export const routes = async () => {
  app.register(healthCheckRoutes);
  app.register(exercisesRoutes);
};
