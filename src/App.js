import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {usePosts} from "./hooks/HookPost";
import axios from "axios";


function App() {

    const [posts, setPosts] = useState([
        {id : 1, name : 'Herman', age : 19},
        {id : 2, name : 'Danya', age : 19},
        {id : 3, name : 'Victor', age : 18},
        {id : 4, name : 'Misha', age : 20}
    ])

    const [filter, setFilter] = useState({
        sort : 'Select sort option',
        order : 'Select order option',
        query : ''
    })

    const sortedAndSearchedPosts = usePosts(filter, setFilter, posts)
    const [modal, setModal] = useState(false)

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    async function getPosts() {
        // const localParams = document.location.search;
        const response = await axios.get('http://localhost:8080/clothes/pageData/rest')
        console.log(response.data.items)
    }

    return (
        <div className="App">
            <MyButton onClick={getPosts}>
                GET POSTS
            </MyButton>
            <MyButton style = {{marginTop : '25px'}} onClick = {() => setModal(true)}>
                Create new post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create = {createNewPost}/>
            </MyModal>
            <hr style={{margin : '15px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostList style={{marginBottom : '40px'}} remove = {removePost} posts = {sortedAndSearchedPosts} title={'Post list'}/>
        </div>
    );
}


export default App;
