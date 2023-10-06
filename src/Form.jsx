import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      studentArray: [],
      // error: {},
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleSubmit = () => {
    if (
      this.state.name.length > 0 &&
      this.state.department.length > 0 &&
      this.state.rating > 0 &&
      this.state.rating < 5
    ) {
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
    } else {
      alert("Some Input is Invalid")
    }

    // if(this.state.rating > 5 || this.state.rating < 1){
    //   alert("Rating is not between 1 to 5")
    // }
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
            <button
              className="submitBtn"
              type="button"
              onClick={this.handleSubmit}
            >
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
