import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../App.css';

const Skills = () => (
    <div className="App">
        <Header />
        <div className="navbar">
          <ul className="list">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><b>Skills</b></li>
          <li><Link className="link" to="/portfolio">Portfolio</Link></li>
          <li><Link className="link" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="container"/>
          <div className="deco">
            <div className="shead" />
              <h1 className="text">My Skills</h1>
                <h3>LANGUAGES</h3>
                <hr />
                <p>JavaScript, HTML5, CSS3, SASS, C, SQL, JAVA</p>
                <h3>FRAMEWORKS, LIBRARIES AND OTHER TECHNOLOGIES</h3>
                <hr />
                <p>Node.js, React.js</p>
                <h3>DATABASES</h3>
                <hr />
                <p>My SQL, MongoDB, Express</p>
                <h3>VERSION CONTROL</h3>
                <hr />
                <p>Git</p>
                <h3>PLATFORMS</h3>
                <hr />
                <p>Windows, Linux (Ubuntu)</p>
             </div>
      </div>
);
export default Skills;