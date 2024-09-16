import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { ExerciseRepository } from '../../repositories/exercises/exercises.repository';
import { Exercise } from '../../contracts/models/exercise';

export const saveExercise = async (app: FastifyInstance) => {
  const repository = new ExerciseRepository();

  app.post('/exercises', (request: FastifyRequest, reply: FastifyReply) => {
    return repository.save(request.body as Exercise, reply);
  });
};
