import React, {Component} from 'react';
import Calendar from 'react-calendar'
import TodoCalendar from './TodoCalendar'
import './Todo.css';

class TodoCalendarModal extends Component {

  render(){
    return (
        <div className = "todo-Calendar-wrapper">
            <Calendar/>
        </div>
    );
  }
};

export default TodoCalendarModal;