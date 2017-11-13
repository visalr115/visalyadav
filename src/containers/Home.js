import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../App.css';

const Home = () => (
    <div className="App">
        <Header />
        <div className="navbar">
          <ul className="list">
            <li><b>Home</b></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/skills">Skills</Link></li>
            <li><Link className="link" to="/portfolio">Portfolio</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="container"/>
        <img className="profile" alt="" src="/image/profile.JPG"/>
        <div className="contentName">
        <h1>Hi, I'm Visal!</h1>
        </div>
      </div>
);
export default Home;