import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Header from '../component/Header';
import '../App.css';

const Skills = () => (
    <div className="App">
        <Header />
        <div className="navbar">
          <ul className="list">
          <Link className="link" to="/"><li>Home</li></Link>
          <Link className="link" to="/about"><li>About</li></Link>
          <li><b>Skills</b></li>
          <Link className="link" to="/portfolio"><li>Portfolio</li></Link>
          <Link className="link" to="/contact"><li>Contact</li></Link>
          </ul>
        </div>
        <div className="container2">
          <div className="deco">
            <div className="shead" />
              <h1 className="text">My Skills</h1>
              <Fade left>
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
                </Fade>
             </div>
             </div>
      </div>
);
export default Skills;