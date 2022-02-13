import React from 'react';
import './MyInputModel.css'

const MyInput = (props) => {
    return (
        <input {...props} className={'myInput'}/>
    );
};

export default MyInput;