import React, { Component } from 'react';
import './Todo.css';

class TodoItem extends Component {
    render() {
        const { id, text, checked, onDelete, onToggle } = this.props;
        return (
            <div className = "todo-item">
              <div className = "todo-remove" onClick = {() => {
                  onDelete(id);
              }} >
                  &times;
              </div>
              <div className = {`todo-text ${checked && 'checekd'}`} onClick = {() => {
                  onToggle(id);
              }}>
               {text}
              </div>
              { checked && (<div className = "todo-checked"> ✓ </div>)}
            </div>
        )
    };
}

export default TodoItem