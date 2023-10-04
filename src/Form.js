import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "", 
      rating: "",
      studentArray: [],
      error:{}
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleValidation = ()=>{
    if(this.state.name = null){
     alert("Empty Name")
    }
  }

  handleSubmit = () => {
    // this.handleValidation();
    const tempobj = {
      name: this.state.name,
      department: this.state.department, 
      rating: this.state.rating,
    };

    this.setState((prevState) => ({
      studentArray: [...prevState.studentArray, tempobj],
    }));

    this.setState({
      name: "",
      department: "",
      rating: "",
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={this.state.name} 
          onChange={this.handleInput}
        />

        <input
          type="text" 
          id="department" 
          name="department"
          placeholder="Department"
          value={this.state.department} 
          onChange={this.handleInput}
        />

        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="Rating"
          value={this.state.rating}
          onChange={this.handleInput}
        />

        <button type="button" onClick={this.handleSubmit}>
          Submit
        </button>

        <div>
          {this.state.studentArray.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.name} || {item.department} || {item.rating}</h1>
              </div>             
            );
          })}
        </div>
      </>
    );
  }
}
