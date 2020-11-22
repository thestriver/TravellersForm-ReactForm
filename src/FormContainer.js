import React, { Component } from "react";
import FormComponent from "./FormComponent";
//Will essentially take care of all the business logic of the form

export default class FormContainer extends Component {
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

  // handleSubmit = () => {
  //   alert();
  // };

  render() {
    return (
      <FormComponent
        handleInputChange={this.handleInputChange}
        data={this.state}
      />
    );
  }
}
