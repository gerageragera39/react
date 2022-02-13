import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value = {filter.query}
                type={"text"}
                placeholder={"Search..."}
                onChange = {(e) => {
                    setFilter({...filter, query : e.target.value})
                }}
            />

            <MySelect
                value={filter.sort}
                onChange = {(e) => {
                    setFilter({...filter, sort : e})
                }}
                defaultValue={'Select sort option'}
                options={[
                    {value : 'name', text : 'By name'},
                    {value : 'age', text : 'By age'}
                ]}
            />
            <MySelect
                value={filter.order}
                onChange = {(e) => {
                    setFilter({...filter, order : e})
                }}
                defaultValue={'Select order option'}
                options={[
                    {value : 'desc', text : 'Descending'},
                    {value : 'asc', text : 'Ascending'}
                ]}
            />
        </div>
    );
};

export default PostFilter;