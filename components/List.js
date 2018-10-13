import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { deletetodo, todos } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          #{todo.id}
          {todo.title}&nbsp;&nbsp;
          <button
            onClick={() => {
              deletetodo(todo.id);
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
