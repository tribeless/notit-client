import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import {createUploadLink} from "apollo-upload-client";
import { persistCache } from 'apollo3-cache-persist';
import {OPEN_FORM} from "./GraphQl/Queries/GraphQlClientQueries";
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

require('dotenv').config();
const configValues = process.env;

const httpLink = createUploadLink({
  uri: "http://localhost:4003/graphql",
  credentials:"include"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
  { 
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )}
    );
  if (networkError) console.log(`[Network error]: ${networkError}`,networkError.statusCode);
});

const cache = new InMemoryCache();

const initData={
  authorId:"",
  openForm:false,
  taskType:""
}

cache.writeQuery({query:OPEN_FORM,data:initData});

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
    link,
    cache,
    resolvers:{}
   
});

persistCache({
  cache,
  storage: window.localStorage
}).then(() => {
  client.onResetStore(async () => cache.writeQuery({
    query: OPEN_FORM,
    data: initData
  }));

});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
