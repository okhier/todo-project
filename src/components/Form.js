import React from 'react';
import TodoCalendar from './TodoCalendar'

const Form = ({value, onChange, onCreate, onKeyPress, status, openCalendar, closeCalendar}) => {
    return (
        <div className = "form">
           <input value = {value} onChange = {onChange} className = "form-input"/>
           <TodoCalendar status = {status} openCalendar = {openCalendar} 
             closeCalendar = {closeCalendar} />
           <div onClick = {onCreate} className = "form-button">
               追加
           </div>
        </div>
    );
};

export default Form;