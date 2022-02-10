import React, {FunctionComponent, useMemo} from 'react';
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';
import {Page} from './components/page';
import {PageProvider} from './providers/page-provider';
import {QueryProvider} from './providers/query-provider';

export const ReactQuery: FunctionComponent = () => {
  const client = useMemo(() => {
    return new QueryClient({
      queryCache: new QueryCache({}),
    });
  }, []);

  return (
    <QueryClientProvider client={client}>
      <PageProvider>
        <QueryProvider>
          <Page />
        </QueryProvider>
      </PageProvider>
    </QueryClientProvider>
  );
};
