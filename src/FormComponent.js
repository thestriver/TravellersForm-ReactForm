import React from "react";

//Will essentially take care of all the UI logic of the form

export default function FormComponent(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="last Name"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleInputChange}
        />
        <br />
        <input
          type="number"
          placeholder="Your Age"
          name="age"
          value={props.data.age}
          onChange={props.handleInputChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            checked={props.data.gender === "male"}
            value="male"
            onChange={props.handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            checked={props.data.gender === "female"}
            value="female"
            onChange={props.handleInputChange}
          />{" "}
          Female
        </label>
        <br />
        <label>
          You're travelling to?
          <select
            value={props.data.destination}
            name="destination"
            onChange={props.handleInputChange}
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
            checked={props.data.isVegetarian}
            onChange={props.handleInputChange}
          />
          vegetarian
        </label>
        <label>
          <input
            type="checkbox"
            name="isLactose"
            checked={props.data.isLactose}
            onChange={props.handleInputChange}
          />
          Lactose Intolerant
        </label>
        <label>
          <input
            type="checkbox"
            name="isHalal"
            checked={props.data.isHalal}
            onChange={props.handleInputChange}
          />
          Halal
        </label>
        <br /> <br />
        <button>Submit</button>
      </form>

      <br />
      <hr />

      <h1>
        Your Name: {props.data.firstName} {props.data.lastName}
      </h1>
      <h2>Your age: {props.data.age} </h2>
      <p>You are a {props.data.gender} </p>
      <p>You are travelling to: {props.data.destination}</p>
      <p>Your dietary choices are:</p>
      <span> vegetarian: {props.data.isVegetarian ? "Yes" : "No"} </span>
      <br />
      <span> Lactose Intolerant: {props.data.isLactose ? "Yes" : "No"} </span>
      <br />
      <span> Halal: {props.data.isHalal ? "Yes" : "No"} </span>
    </div>
  );
}
