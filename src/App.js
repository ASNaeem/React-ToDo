import React, { Component } from "react";
import TodoItems from "./TodoItem";
import TweenLite from "gsap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  componentDidMount() {
    // use the node ref to create the animation
    this.myTween = TweenLite.to(this.myElement, 1, { x: 100, y: 100 });
    TweenLite.to(this.myElement, 1, {x: 100, y: 100});
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }
    console.log(this.state.items);

    e.preventDefault();
  }
  deleteItem(key) {
    let filteredItems = this.state.items.filter(function (items) {
      return items.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }
  hoverEffect() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">ToDoLiSt</header>
        <p>Hint: Click on a list item to remove it.</p>
        <form onSubmit={this.addItem}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                New List Item
              </span>
            </div>
            <input
              ref={a => (this._inputElement = a)}
              type="text"
              placeholder="input your texts here !"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </form>

        <div ref={div => this.myElement = div} >
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
