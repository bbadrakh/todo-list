import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

export const getLists = async () => {
  try {
    const result = await prisma.list.findMany();
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Error fetching lists");
  }
};

export const getList = async (id: string) => {
  try {
    const result = await prisma.list.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Error fetching list");
  }
};

export const postList = async (input: { text: string }) => {
  try {
    const result = await prisma.list.create({ data: input });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Error posting list");
  }
};

export const deleteList = async (id: string) => {
  try {
    const result = await prisma.list.delete({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Error deleting list");
  }
};
