import fastify from 'fastify';
import { routes } from './routes';

export const app = fastify();
app.register(routes);

app.listen(
  {
    port: 3333,
  },
  (error, adress) => {
    if (error) {
      console.error(error);
    }

    console.log('HTTP server running at port 3333!');
  },
);
