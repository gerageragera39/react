import {useMemo} from "react";

export const useSortedPost = (filter, setFilter, posts) => {

    const sortedPosts = useMemo(() => {
        if (filter.order === 'Select order option') {
            setFilter({...filter, order: 'desc'})
        }
        if (filter.sort === 'Select sort option') {
            setFilter({...filter, order: 'Select order option'})
        } else if (filter.order === 'Select order option') {
            setFilter({...filter, order: 'desc'})
        }
        if (filter.sort === 'name' && filter.order === 'asc') {
            return ([...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])))
        } else if (filter.sort === 'name' && filter.order === 'desc') {
            return ([...posts].sort((a, b) => b[filter.sort].localeCompare(a[filter.sort])))
        } else if(filter.sort === 'age' && filter.order === 'asc') {
            return ([...posts].sort((a, b) => a[filter.sort] - b[filter.sort]))
        } else if(filter.sort === 'age' && filter.order === 'desc') {
            return ([...posts].sort((a, b) => b[filter.sort] - a[filter.sort]))
        }
        return posts;
    }, [filter.sort, filter.order, posts])

    return sortedPosts;
}

export const usePosts = (filter, setFilter, posts) => {

    const sortedPosts = useSortedPost(filter, setFilter, posts)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.name.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    return sortedAndSearchedPosts;
}