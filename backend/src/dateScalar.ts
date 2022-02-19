import { GraphQLScalarType, Kind } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  serialize(value) {
    const date = new Date(value);

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  },
});

export default dateScalar;
