import {QueryFunctionContext, useQuery, UseQueryOptions, UseQueryResult,} from '@tanstack/react-query';
import {TParams} from '../services/types';
import {api, queryBuilder, storage} from '../services';
import {get} from 'lodash';

interface QueryKeyArgs {
  url: string;
  params?: TParams | undefined;
}

interface Props {
  name: string;
  url: string;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  queryOptions?: UseQueryOptions<any, any, any, any>;
  params?: TParams | undefined;
}

async function getAll({
  queryKey,
}: QueryFunctionContext<[string, QueryKeyArgs]>) {
  const {url, params} = queryKey[1];
  const res = await api.get(queryBuilder(url, {
    ...params,
    extra: {
      ...params?.extra,
      _l: params?.extra?._l || storage.get('language')
    },
  }));
  return get(res, 'data', null);
}

function useGetAll(args: Props): UseQueryResult {
  const {name, onSuccess, onError, queryOptions, url, params} = args;
  const data = useQuery({
    queryKey: [`${name}`, {url, params}],
    queryFn: getAll,
    cacheTime: 0,
    staleTime: 0,
    onSuccess,
    onError,
    ...queryOptions,
  });

  return data;

}

export default useGetAll;
