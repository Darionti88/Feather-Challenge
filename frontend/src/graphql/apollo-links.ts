import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("access-token");
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token} ` : "",
    },
  };
});

export const link = errorLink.concat(authLink.concat(httpLink));
