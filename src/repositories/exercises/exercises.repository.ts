import { FastifyReply } from 'fastify';
import { Exercise } from '../../contracts/models/exercise';

let exercises: Exercise[] = [];

export class ExerciseRepository {
  save(exercise: Exercise, reply: FastifyReply): FastifyReply {
    try {
      exercises.push(exercise);

      return reply.status(204).send();
    } catch (error) {
      return reply.status(400).send({ message: 'Error!' });
    }
  }

  get(reply: FastifyReply): FastifyReply {
    try {
      return reply.status(200).send(exercises);
    } catch (error) {
      return reply.status(400).send({ message: 'Error!' });
    }
  }
}
