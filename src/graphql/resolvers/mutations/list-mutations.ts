import { postList, deleteList } from "@/service/list-service";

export const listMutations = {
  postList: (_: unknown, { input }: { input: { text: string } }) => postList(input),
  deleteList: (_: unknown, { id }: { id: string }) => deleteList(id),
};
