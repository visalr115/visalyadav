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
            <Link className="link" to="/about"><li>About</li></Link>
            <Link className="link" to="/skills"><li>Skills</li></Link>
            <Link className="link" to="/portfolio"><li>Portfolio</li></Link>
            <Link className="link" to="/contact"><li>Contact</li></Link>
          </ul>
        </div>
        <div className="container">
          <div className="me">
        <img className="profile" alt="" src="/image/profile.JPG"/>
        </div>
        <div className="contentName">
        <Fade top><h1>Bonjour, I'm Visal!</h1></Fade>
        <Typist>
        <h2 className="hi2">Developer, Quick Learner and Innovation is my Passion.</h2>
        </Typist>
        </div>
        </div>
      </div>
);
export default Home;