import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="fa fa-bars"/>
          <h2 className="myname" >Visal Yadav</h2>
          <a href="https://github.com/visalr115"><i className="fa fa-github" /></a>
          <a href="https://www.linkedin.com/in/visalyadav/"><i className="fa fa-linkedin" /></a> 
        </header>
        <div className="navbar">
          <ul className="list">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolios</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="container"/>
        <img className="profile" alt="" src="/image/profile.JPG"/>
      </div>
    );
  }
}

export default App;
