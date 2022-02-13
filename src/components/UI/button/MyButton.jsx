import React from 'react';
import './MyByttonModel.css'

const MyButton = ({children, ...props}) => {

    return (
        <div>
            <button {...props} className={'myBtn'}>
                {children}
            </button>
        </div>
    );
};

export default MyButton;