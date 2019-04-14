import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      id: 0,
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ id: this.state.id + 1 });
  }

  handleSubmit(event) {
    this.setState({ value: this.state.value });
    this.setState({ todo: this.state.value });
    console.log(this.state.id);
    //event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="badge badge-warning m-2">asd</span>
        </header>
        <span>
          <ul>
            {this.state.todo.map(todo => (
              <li key={new Date().getTime()}> </li>
            ))}
          </ul>
        </span>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                New List Item
              </span>
            </div>
            <input
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              placeholder="input your texts here !"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <button type="submit" className="btn btn-success">
            +add
          </button>
        </form>
      </div>
    );
  }
}

export default App;
