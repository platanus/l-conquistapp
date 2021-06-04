import React from 'react';
import {
  QueryClientProvider,
  QueryClient,
} from 'react-query';
import Home from './src/Home';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
