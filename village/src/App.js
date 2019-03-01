import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  withRouter
} from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: '',
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateSmurfList = (newSmurf) => {
    let newSmurfList = this.state.smurfs;
    console.log(newSmurfList);
    newSmurfList.push(newSmurf);
    console.log(newSmurfList);
    this.setState({
      smurfs: newSmurfList
    })
    console.log(this.state.smurfs);
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <h1 className="navbar-brand">Smurf Village</h1>
            <div className="nav-links">
              <NavLink exact to="/" className="nav-item">Village</NavLink>
              <NavLink exact to="/smurf-form" className="nav-item">Add Smurf</NavLink>
            </div>
          </div>
        </nav>
        
        <Route exact path="/" render={props => <Smurfs props={props} smurfs={this.state.smurfs} /> }/>
        <Route exact path="/smurf-form" render={ props => <SmurfForm props={props} updateSmurfList={this.updateSmurfList} /> }/>

      </div>
    );
  }
}

export default App;
