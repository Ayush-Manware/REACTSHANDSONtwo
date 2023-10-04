import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: "",
      email: "",
      studentArray: [],
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (a)=>{
    const tempobj = {
        name:"",
        dept:"",
        rating :""
    }
  }

  render() {
    return (
      <>
        <h2>{this.state.nameValue}</h2>
        <input
          type="text"
          id="name"
          name="nameValue"
          placeholder="Name"
          onChange={this.handleInput}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={this.handleInput}
        />
        <p>{this.state.email}</p>

        <button
          type="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </>
    );
  }
}
