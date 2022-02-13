import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove ,style}) => {

    if(posts.length === 0) {
        return (
            <h1 style={{textAlign : 'center'}}>Post list is empty</h1>
        )
    }

    return (
        <div style={style}>
            <h1 style={{textAlign : 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove = {remove} number = {index} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;