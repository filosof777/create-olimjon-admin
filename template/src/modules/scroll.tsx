import {UseInfiniteQueryResult, UseQueryOptions} from '@tanstack/react-query';
import {get} from 'lodash';
import useScroll from "../hooks/useScroll.tsx";
import {TParams} from "../services/types";
import React from "react";

interface IScrollProps {
    name: string;
    url: string;
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
    params?: TParams;
    queryOptions?: UseQueryOptions<any, any, any, any>;
    children: (data: UseInfiniteQueryResult & { items: any }) => JSX.Element;
}

const Scroll: React.FC<IScrollProps> = ({name, url, onSuccess, onError, params, queryOptions, children}) => {
    const data = useScroll({name, url, params, onSuccess, onError, queryOptions});

    return (
        <>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-expect-error*/}
            {children({items: get(data, 'items', []), ...data})}
            {data.hasNextPage && <div ref={data.ref} className="w-full h-10"/>}
        </>
    );
};

export default Scroll;
