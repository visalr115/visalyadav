import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../App.css';

const About = () => (
    <div className="App">
        <Header />
        <div className="navbar">
          <ul className="list">
            <li><Link className="link" to="/">Home</Link></li>
            <li><b>About</b></li>
            <li><Link className="link" to="/skills">Skills</Link></li>
            <li><Link className="link" to="/portfolio">Portfolio</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="container"/>
        </div>
        );

export default About;