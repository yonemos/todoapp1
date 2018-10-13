import React from "react";
//import { AddTodo }from "./components/AddTOdo"

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "追加してください" };
  }
  render() {
    return (
      <div>
        <h2>AddTodo</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            onChange={this.handleChange}
            id="name1"
          />
          <input type="submit" value="Add To do List" />
        </form>
      </div>
    );
  }
  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
    // console.log({ title });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
