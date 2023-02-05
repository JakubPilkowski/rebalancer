import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  uri: process.env.REBALANCER_API,
  cache,
});

export default client;
