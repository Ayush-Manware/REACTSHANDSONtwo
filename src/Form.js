import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      studentArray: [],
      error: {},
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleValidation = () => {
    if ((this.state.name = null)) {
      alert("Empty Name");
    }
  };

  handleSubmit = () => {
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
        <div className="formContainer">
          <h2 className="heading">Employer's Feedback Form</h2>
          <form>
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
            <button className="submitBtn" type="button" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>

        <div className="container">
          {this.state.studentArray.map((item, index) => {
            return (
                <div className="flexDiv" key={index}>
                  <h1>
                    {item.name} || {item.department} || {item.rating}
                  </h1>
                </div>
            );
          })}
        </div>
      </>
    );
  }
}
