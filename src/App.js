import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegetarian: false,
      isLactose: false,
      isHalal: false

      // dietaryL: false,
      // dietaryH: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  };

  handleSubmit = () => {
    alert();
  };

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            placeholder="last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="number"
            placeholder="Your Age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === "male"}
              value="male"
              onChange={this.handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === "female"}
              value="female"
              onChange={this.handleInputChange}
            />{" "}
            Female
          </label>
          <br />
          <label>
            You're travelling to?
            <select
              value={this.state.destination}
              name="destination"
              onChange={this.handleInputChange}
            >
              <option value="Turkey">Turkey</option>
              <option value="Bahamas">Bahamas</option>
              <option value="London">London</option>
            </select>
          </label>
          <br />
          <p>Dietary Choices? </p>
          <label>
            <input
              type="checkbox"
              name="isVegetarian"
              checked={this.state.isVegetarian}
              onChange={this.handleInputChange}
            />
            vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactose"
              checked={this.state.isLactose}
              onChange={this.handleInputChange}
            />
            Lactose Intolerant
          </label>
          <label>
            <input
              type="checkbox"
              name="isHalal"
              checked={this.state.isHalal}
              onChange={this.handleInputChange}
            />
            Halal
          </label>
          <br /> <br />
          <button>Submit</button>
        </form>

        <br />
        <hr />

        <h1>
          Your Name: {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>Your age: {this.state.age} </h2>
        <p>You are a {this.state.gender} </p>
        <p>You are travelling to: {this.state.destination}</p>
        <p>Your dietary choices are:</p>
        <span> vegetarian: {this.state.isVegetarian ? "Yes" : "No"} </span>
        <br />
        <span> Lactose Intolerant: {this.state.isLactose ? "Yes" : "No"} </span>
        <br />
        <span> Halal: {this.state.isHalal ? "Yes" : "No"} </span>
      </div>
    );
  }
}

// Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
