"use client";

import EmptySearch from "./empty-search";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
};

export const BoardList = ({
    orgId,
    query
} :BoardListProps) => {
    const data = []; // Change to API call.

    if(!data?.length && query.search) {
        return <EmptySearch />
    }

    if(!data?.length && query.favorites) {
        return <h1>No Favorites</h1>
    }

    if(!data.length) return <h1>No Boards.</h1>;

    return (
        <div className="">
            {JSON.stringify(query)}
        </div>
    )
}