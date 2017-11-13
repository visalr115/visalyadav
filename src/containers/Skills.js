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
      </div>
);
export default Skills;