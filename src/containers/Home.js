import React from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../../node_modules/react-typist/dist/Typist.css';
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
        <Fade top><h1>Bonjour, I'm Visal!</h1></Fade>
        <Typist>
        <h2 className="hi2">Developer, Quick Learner and Innovation is my Passion.</h2>
        </Typist>
        </div>
      </div>
);
export default Home;