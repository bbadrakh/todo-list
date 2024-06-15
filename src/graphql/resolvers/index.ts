import { listMutations } from "./mutations/list-mutations";
import { listQueries } from "./queries/list-queries";

export const resolvers = {
  Query: {
    ...listQueries,
  },
  Mutation: {
    ...listMutations,
  },
};
