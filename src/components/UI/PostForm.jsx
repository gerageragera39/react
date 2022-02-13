import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({name : '', age : ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id : Date.now()
        }
        create(newPost)
        setPost({name : '', age : ''})
    }

    return (
        <form>
            <MyInput
                onChange = {(e) => {
                    setPost({...post, name : e.target.value})
                }}
                type={"text"}
                placeholder={"Enter name"}
                value = {post.name}
            />
            <MyInput
                onChange = {(e) => {
                    setPost({...post, age : e.target.value})
                }}
                type={"number"}
                placeholder={"Enter age"}
                value = {post.age}
            />
            <h1>{post.name}</h1>
            <h1>{post.age}</h1>
            <MyButton onClick = {addNewPost}>Add Post</MyButton>
        </form>
    );
};

export default PostForm;