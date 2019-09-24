import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import JSONfoods from "./foods.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Foodbox from "./components/Foodbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: JSONfoods
    };
    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleQuantity = this.handleQuantity.bind(this);
  }

  // handleSearch(event) {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }

  // handleQuantity(event) {
  //   this.setState({
  //     quantity: event.target.value
  //   });
  // }

  // get selectedFoods() {
  //   return this.state.foods.filter(food =>
  //     food.name.includes(this.state.search)
  //   );
  // }

  render() {
    const foodbox = this.state.foodbox;
    return (
      <Container>
        {this.state.foods.map(food => (
          <Foodbox food={food} />
        ))}
      </Container>
    );
  }
}

export default App;
