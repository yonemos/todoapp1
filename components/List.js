import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.todos.map(todo => {
      return (
        <li>
          #{todo.id}
          {todo.title}&nbsp;&nbsp;
          <button
            onClick={() => {
              this.props.deletetodo(todo.id);
            }}
          >
            消す
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
