import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import resolvers from './resolvers';
import typeDefs from './schema';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at localhohst:4000${server.graphqlPath}`);
});

