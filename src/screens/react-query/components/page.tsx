import React, {FunctionComponent} from 'react';
import {Page as PageBase} from '../../../components/page';
import {useQueryResult} from '../providers/query-provider';

export const Page: FunctionComponent = ({}) => {
  const {data, isLoading, error} = useQueryResult();
  return <PageBase data={data} loading={isLoading} error={error} />;
};
