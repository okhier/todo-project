import React from 'react';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className = "form">
           <input value = {value} onChange = {onChange} className = "form-input"/>
           <div onClick = {onCreate} className = "form-button">
               追加
           </div>
        </div>
    );
};

export default Form;