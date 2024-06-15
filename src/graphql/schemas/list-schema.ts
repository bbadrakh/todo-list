import gql from "graphql-tag";
import { nanoid } from "nanoid";

export const listTypeDefs = gql`
  type List {
    id: String!
    text: String!
  }
`;
