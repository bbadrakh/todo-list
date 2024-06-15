import gql from "graphql-tag";

export const listTypeDefs = gql`
  type List {
    id: ID!
    text: String!
  }
  input ListCreateInput {
    text: String!
  }
  type Query {
    getLists: [List!]
    getList: (id: ID!): List!
  }
  type Mutation {
    postList: (id: ID!): List!
    deleteList: (input: ListCreateInput!): List!
  }
`;
