import { ApolloServer, gql } from "apollo-server";
import { Sequelize } from "sequelize";
import { initializeApp } from "firebase/app";
import * as admin from "firebase-admin";
import mysql from "mysql2";
import dateScalar from "./dateScalar";
import { lowerCasedValues } from "./helpers/getLowercasedValues";
import { policies } from "./mockData";
import { firebaseConfig } from "./config/firebase";
import { typeDefs } from "./typeDefs/typeDefs";
import { resolvers } from "./resolvers/resolvers";

// const app = initializeApp(firebaseConfig);
var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
