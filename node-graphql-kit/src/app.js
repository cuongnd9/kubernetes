import { GraphQLServer } from 'graphql-yoga';
import { makeExecutableSchema } from 'graphql-tools';
import signale from 'signale';
import { formatError } from './components/utils';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const app = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new GraphQLServer({ schema });

  const options = {
    formatError,
    debug: false,
  };

  server.start(options, ({ port }) => signale.watch(`Server is running on http://127.0.0.1:${port}`));
};

export default app;
