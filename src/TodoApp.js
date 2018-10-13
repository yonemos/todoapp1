import React from "react";
import { AddTodo } from "../components/AddTodo";
import { List } from "../components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }
  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List deletetodo={this.deletetodo} todos={this.state.todos} />
      </div>
    );
  }
  addTodo = title => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.nextId + 1, title: title }],
      nextId: this.state.nextId + 1
    });
  };
  deletetodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
