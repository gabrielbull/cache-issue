import React, {
  createContext,
  Fragment,
  FunctionComponent,
  useContext,
  useState,
} from 'react';
import {Pagination} from '../../../components/pagination';

const PageContext = createContext(0);

export function usePage(): number {
  return useContext(PageContext);
}

export const PageProvider: FunctionComponent = ({children}) => {
  const [page, setPage] = useState(0);
  return (
    <PageContext.Provider value={page}>
      <Fragment key={page}>{children}</Fragment>
      <Pagination page={page} setPage={setPage} />
    </PageContext.Provider>
  );
};
