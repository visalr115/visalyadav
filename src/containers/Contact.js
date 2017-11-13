import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../App.css';

const Contacts = () => (
    <div className="App">
        <Header />
        <div className="navbar">
          <ul className="list">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/skills">Skills</Link></li>
          <li><Link className="link" to="/portfolio">Portfolio</Link></li>
          <li><b>Contact</b></li>
          </ul>
        </div>
        <div className="container"/>
        </div>
        );
        
export default Contacts;