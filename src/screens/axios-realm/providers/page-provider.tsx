import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from 'react';
import {Pagination} from '../../../components/pagination';
import {RealmProvider} from './realm-provider';

const PageContext = createContext(0);

export function usePage(): number {
  return useContext(PageContext);
}

export const PageProvider: FunctionComponent = ({children}) => {
  const [page, setPage] = useState(0);
  return (
    <PageContext.Provider value={page}>
      <RealmProvider key={page}>{children}</RealmProvider>
      <Pagination page={page} setPage={setPage} />
    </PageContext.Provider>
  );
};
