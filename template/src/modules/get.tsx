import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { useGet } from "../hooks";
import { get } from "lodash";
import { FC, ReactElement } from "react";
import { TMeta, TParams } from "../services/types";

interface IContainer {
  children: (
    data: {
      items: object[];
      meta: TMeta;
      queryOption: UseQueryResult;
      isDataLoading: boolean;
      isDataEmpty: boolean;
      isDataSuccess: boolean;
    } & UseQueryResult
  ) => ReactElement<any, any> | null;
  name: string;
  url: string;
  dataKey?: string;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  queryOptions?: UseQueryOptions<any, Error>;
  params?: TParams | undefined;
}

const Get: FC<IContainer> = ({
  children,
  name,
  url,
  onSuccess,
  onError,
  dataKey = "data",
  queryOptions,
  params
}) => {
  const data = useGet({
    name,
    url,
    onSuccess,
    onError,
    queryOptions,
    params
  });
  const newData: { items: any; meta: TMeta } = {
    items: get(data, `data.${dataKey}`, []),

    meta: {
      current_page: get(data, "data.meta.current_page", 1),
      count: get(data, "data.meta.to", 1),
      per_page: get(data, "data.meta.per_page", 1),
      page: Math.ceil(
        get(data, "data.meta.total", 1) / get(data, "data.meta.per_page", 1)
      ),
      total: get(data, "data.meta.total", 1)
    }
  };
  return children({
    items: get(newData, "items", []),
    meta: get(newData, "meta"),
    isDataLoading: get(data, "isLoading") && !get(newData, "items"),
    isDataEmpty: !get(data, "isLoading") && !get(newData, "items"),
    isDataSuccess: !get(data, "isLoading") && get(newData, "items"),
    queryOption: data,
    ...data
  });
};

export default Get;
