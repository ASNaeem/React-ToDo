import React, { Component } from "react";
import FlipMove from "react-flip-move";
class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return (
      <li
        onClick={() => this.delete(item.key)}
        key={item.key}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {item.text}
        <span class="badge badge-primary badge-pill">{Date()}</span>
      </li>
    );
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="list-group">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}
export default TodoItems;
