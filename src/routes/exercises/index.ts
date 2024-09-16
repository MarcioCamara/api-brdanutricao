import { app } from '../../server';
import { saveExercise } from '../exercises/save-exercise.route';
import { getExercise } from './get-exercise.route';

export const exercisesRoutes = async () => {
  app.register(saveExercise);
  app.register(getExercise);
};
