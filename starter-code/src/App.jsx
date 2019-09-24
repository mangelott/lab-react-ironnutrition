import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import JSONfoods from "./foods.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";

import Foodbox from "./components/Foodbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: JSONfoods
    };
    // this.handleSearch = this.handleSearch.bind(this);
  }

  // handleSearch(event) {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }

  handleAddition(event) {
    // this.setState({
    //   quantity: event.target.value
    // });
    console.log(event);
  }

  // get selectedFoods() {
  //   return this.state.foods.filter(food =>
  //     food.name.includes(this.state.search)
  //   );
  // }

  render() {
    // const foodbox = this.state.foodbox;
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name (/Kcal)</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.state.foods.map(food => (
            <Foodbox
              food={food}
              handleAddition={this.handleAddition} //passing into component Foodbox
              key={food.name}
            />
          ))}
        </Table>
      </Container>
    );
  }
}

export default App;
