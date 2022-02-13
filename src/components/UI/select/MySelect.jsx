import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            style={{marginRight : '20px'}}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value = {option.value}>
                    {option.text}
                </option>
            )}
        </select>
    );
};

export default MySelect;