import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../App.css';

const Portfolios = () => (
    <div className="App">
        <Header />
        <div className="navbar">
          <ul className="list">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/skills">Skills</Link></li>
          <li><b>Portfolio</b></li>
          <li><Link className="link" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="container"/>
      </div>
);
export default Portfolios;