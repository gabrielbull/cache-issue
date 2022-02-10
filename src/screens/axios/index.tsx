import React, {FunctionComponent} from 'react';
import {Page} from './components/page';
import {PageProvider} from './providers/page-provider';
import {QueryProvider} from './providers/query-provider';

export const Axios: FunctionComponent = () => {
  return (
    <PageProvider>
      <QueryProvider>
        <Page />
      </QueryProvider>
    </PageProvider>
  );
};
