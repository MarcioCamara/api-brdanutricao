import { FastifyInstance, FastifyReply } from 'fastify';
import { ExerciseRepository } from '../../repositories/exercises/exercises.repository';

export const getExercise = async (app: FastifyInstance) => {
  const repository = new ExerciseRepository();

  app.get('/exercises', ({}, reply: FastifyReply) => {
    return repository.get(reply);
  });
};
