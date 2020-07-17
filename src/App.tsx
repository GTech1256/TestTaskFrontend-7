import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from './services/graphql';

import Repositories from './pages/Repositories';


export default () => (
  <ApolloProvider client={client}>
    <div className="container pt-4">
      <Repositories />
    </div>
  </ApolloProvider>
);
