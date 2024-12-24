import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import useApollo from './src/hooks/useApollo';
import './src/styles/base.css';

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root')!);

function App({ Component, pageProps}: AppProps) {
  const client = useApollo(pageProps)
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App