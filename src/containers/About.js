import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../App.css';

const About = () => (
    <div className="App">
        <Header />
        <div className="navbar">
          <ul className="list">
          <Link className="link" to="/"><li>Home</li></Link>
            <li><b>About</b></li>
            <Link className="link" to="/skills"><li>Skills</li></Link>
            <Link className="link" to="/portfolio"><li>Portfolio</li></Link>
            <Link className="link" to="/contact"><li>Contact</li></Link>
          </ul>
        </div>
        <div className="container2">
        <div className="deco">
          <div className="ahead" />
          <h1 className="text">About Me</h1>
          <Fade left>
          <h2>Hi !</h2>
          <p>
            My name is Visal Yadav and I've completed my B-Tech degree in Electronics & Communication Engineering
            from Calcutta Institute of Technology, Howrah.I joined CIT in 2011. Joining CIT was great for me in my life. I completed my degree in 2015.
         </p>
          <p>
            I am currently searching for an opportunity to fulfill my goal and to use my knowledge for
            the development of the firm. I build interactive website that run across Platform and Device
          </p> 
          <p>
            I like exploring new tech articles on the internet, to keep myself updated with the recent
            technology. My interest lies in knowing more about Cloud Computing, Web Technology.
          </p>
          <p>
            In my free time, I like to share my knowledge on Quora. Yes! I like games I play FIFA on my playstation.
            I also play Cricket.
          </p>
      <hr />
      <a className="weblink" href="https://drive.google.com/file/d/1Aj9vC8-FvDt4dibDYGbyfZAZIz2ZPRj0/view?usp=sharing"><h3>CLICK HERE TO VIEW MY RESUME</h3></a>
      </Fade>
      </div>
      </div>
        </div>
        );

export default About;
