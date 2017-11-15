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
        <div className="port1">
      <div className="port1head" />
      <h2 className="title">Leopetra website</h2>
      <p className="subdeco">
        Worked on Leopetra website using react.js.<br />
        Full​ ​Responsive​ ​Website​,​ ​with​ ​admins​ ​having​ ​ability​ ​to  update​ ​content​ ​on​ ​server.<br />
        A fully functional website where one can avail any information about pets and also can book
        Vets, Trainers, Saloon, Restaurants and Event tickets for their pets.
      </p>
      <hr />
      <a className="weblink" href="https://leopetra.com/">VISIT LEOPETRA WEBSITE</a>
    </div>
    <div className="port2">
      <div className="port2head" />
      <h2 className="title">WeberHead Design</h2>
      <p className="subdeco">
        This is my First website.<br />
        Worked on this website using html5 and css3.<br />
        Full​ ​Responsive​ Designed ​Website​.<br />
        Only for try my skills.
      </p>
      <hr />
      <a className="weblink" href="https://weberhead.herokuapp.com/">VISIT THE WEBSITE</a>
    </div>
      </div>
);
export default Portfolios;