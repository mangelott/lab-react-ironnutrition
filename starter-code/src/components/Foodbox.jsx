import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default class Foodbox extends React.Component {
  render() {
    console.log(this.props.food);
    const food = this.props.food;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} height="80" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={food.quantity} />
              </div>
              <div className="control">
                <Button className="button is-info">+</Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
