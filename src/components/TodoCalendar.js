import React, { Component } from 'react';
import Calendar from 'react-calendar'
import MaterialIcon from 'material-icons-react';
import 'react-calendar/dist/Calendar.css';
import './Todo.css';

class TodoCalendar extends Component {
    render() {
        const { status, openCalendar, closeCalendar } = this.props;

    return (
        <div className = "Todo-calendar-template">
            <MaterialIcon onClick={()=> {openCalendar()}} icon="calendar_today"/>
           {status && (<Calendar className="todo-Calendar" 
           onChange = {() => closeCalendar()}/>)}
        </div>
    );
  }
};

export default TodoCalendar;