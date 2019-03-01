import React, { Component } from 'react';
import axios from 'axios';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        this.setState({ 
          name: '',
          age: '',
          height: '',
        })
        this.props.updateSmurfList(newSmurf);
      })
      .catch(err => {
        console.log(err);
        alert(err.response.data.Error)
        debugger;
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
        <div className="form-group">
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            className="form-control"
            />
        </div>
        <div className="form-group">
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            className="form-control"
            />
        </div>
        <div className="form-group">
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            className="form-control"
            />
        </div>
          <button type="submit" className="btn btn-success">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
