import {useInfiniteQuery, UseQueryOptions} from '@tanstack/react-query';
import {api, queryBuilder} from "../services";
import {TParams} from "../services/types";
import {get} from "lodash";
import {useInView} from "react-intersection-observer";
import React from "react";

interface IUseScroll {
    name: string;
    url: string;
    params?: TParams;
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
    queryOptions?: UseQueryOptions<any, any, any, any>;
}

const fetchData = async ({pageParam = 1, queryKey}: any) => {
    const {url, params} = get(queryKey, '[1]', {});

    const response = await api.get(queryBuilder(url, {page: pageParam, ...params}));
    const data = get(response, 'data', {});
    return {
        ...data,
        nextPage: get(data, 'next_page_url', null),
    };
};

const useScroll = ({name, url, params, onSuccess, onError, queryOptions}: IUseScroll) => {
    const {ref, inView} = useInView();

    const query = useInfiniteQuery({
        queryKey: [name, {url, params}],
        queryFn: fetchData,
        getNextPageParam: (lastPage) => {
            return get(lastPage, 'next_page_url') ? new URLSearchParams(new URL(get(lastPage, 'last_page_url')).search).get('page') : null
        },
        onSuccess,
        onError,
        ...queryOptions,
    });

    const items = get(query, 'data.pages', []).flatMap(page => get(page, 'data', []));

    React.useEffect(() => {
        if (inView && query.hasNextPage) {
            query.fetchNextPage();
        }
    }, [inView, query.hasNextPage]);

    return {...query, items: items.length ? items : [], ref, inView};
};

export default useScroll;
