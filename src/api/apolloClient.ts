import { ApolloClient, InMemoryCache, ApolloProvider, gql, ApolloLink } from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  uri: process.env.REBALANCER_API,
  cache,
});

// const websocketLink = new ApolloLink((operation, forward) => {
//   return forward(operation);
// });

export default client;
