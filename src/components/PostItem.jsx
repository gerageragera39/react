import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.number}. {props.post.name}</strong>
                    <div>
                        I am {props.post.age} years old
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick = {
                        () => props.remove(props.post)
                    }>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;