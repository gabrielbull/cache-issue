import React, {FunctionComponent} from 'react';
import {Page as PageBase} from '../../../components/page';
import {useQueryResult} from '../providers/query-provider';

export const Page: FunctionComponent = ({}) => {
  const {data, loading, error} = useQueryResult();
  return <PageBase data={data} loading={loading} error={error} />;
};
