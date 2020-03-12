import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList from './LaunchList';
import OwnProps  from './LaunchList';

let props=OwnProps;

interface OwnProps{
  id: number;
}
const LaunchListContainer = () => {
  const { data, error, loading, refetch } = useLaunchListQuery({
    variables: { id: String(id) },
  });
  if(loading){
    return <div> Loading..</div>;
  }

  if(error || !data){
    return <div> ERROR</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;