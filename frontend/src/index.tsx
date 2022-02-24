import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allPolicies: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...incoming];
            },
          },
        },
      },
    },
  }),
  link,
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
