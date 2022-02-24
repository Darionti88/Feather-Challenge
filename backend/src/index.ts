import { ApolloServer, gql } from "apollo-server";
import express from "express";
import cors from "cors";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { prisma } from "./context";
import { Request } from "express";
import { decodeToken } from "./utils/auth";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: { req: Request }) => {
    const tokenWithBearer = req.headers.authorization || "";
    const token = tokenWithBearer.split(" ")[1];
    const user = decodeToken(token);
    return {
      user,
      prisma,
    };
  },
});
const app = express();
app.use(cors());

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
