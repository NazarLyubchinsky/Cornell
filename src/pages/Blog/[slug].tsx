import React from 'react'
import { useRouter } from 'next/router'
//redux
import { useSelector } from 'react-redux';
import { selectBlog } from '@/store/features/Blog';
import { createSelector } from 'reselect';



const BlogSingle = () => {
    const router = useRouter();
    const {slug} = router.query;
    


    return (
        <>
        </>
    )
}

export default BlogSingle