import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default class Foodbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleQuantity(event) {
    this.setState({
      quantity: event.target.value
    });
    console.log("Updating...");
  }

  // choice() {}

  render() {
    // console.log(this.props.food);
    const food = this.props.food;
    return (
      <tbody>
        <tr>
          <td>
            <img src={food.image} height="80" alt={food.name} />
          </td>
          <td>
            <strong>{food.name}</strong>
            <br></br>
            <small>{food.calories} Kcal</small>
          </td>
          <td>
            <input
              className="input"
              type="number"
              value={this.state.quantity}
              onChange={this.handleQuantity}
            />
          </td>
          <td>
            <Button onClick={this.props.handleAddition}>+</Button>{" "}
            {/* Retrieving from props */}
          </td>
        </tr>
      </tbody>
    );
  }
}

//método
// passar this.state.quantity & this.handle quantity
