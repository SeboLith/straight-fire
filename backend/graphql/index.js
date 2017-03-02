import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
export let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
export let root = {
  hello: () => {
    return 'Hello world!';
  },
};