import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
 render() {
     const { todos, onDelete, onToggle } = this.props;
     const todoList = todos.map(({id, text, checked}) => (
         <TodoItem id = {id} text = {text} checked = {checked} onDelete = {onDelete} onToggle = {onToggle} key = {id}/>
     ))
   return (
        <div>
           {todoList}
        </div>
   )
 }
}

export default TodoItemList;