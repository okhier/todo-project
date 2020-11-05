import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
 id = 2

  state = {
    input: '',
    todos: [
      { id: 0, text: 'ご飯', checked: false },
      { id: 1, text: "登山", checked: false }
    ]
  }

  handleInput = (e) => {
    this.setState({input: e.target.value}); 
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    if (!input) {
      alert("今日やることを入力してください。");
      return
    }
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });

  }

  handleDelete = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id )
    });
  }

 
  render() {
    const { input, todos } = this.state;
  return (
    <TodoListTemplate form = {(<Form value = {input} onChange = {this.handleInput} 
      onCreate = {this.handleCreate} />)}>
      <TodoItemList todos= {todos} onDelete = {this.handleDelete} onToggle= {this.handleToggle} ></TodoItemList>
    </TodoListTemplate>

    );
  }
}

export default App;
