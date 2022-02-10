import React, {FunctionComponent} from 'react';
import {Page} from './components/page';
import {PageProvider} from './providers/page-provider';

export const AxiosRealm: FunctionComponent = () => {
  return (
    <PageProvider>
      <Page />
    </PageProvider>
  );
};
