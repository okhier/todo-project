import React from 'react';
import './Todo.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className = "main">
            <div className = "title">
              今日やること
            </div>
          <section className = "form-wrap">
        　　{form}
          </section>
          <section className = "todolist-wrap">
          {children}
          </section>
        </main>
    );
};

export default TodoListTemplate;