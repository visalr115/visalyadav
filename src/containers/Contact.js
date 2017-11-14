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
        <div className="content">
        <h1>Thanks for Visiting!</h1>
        <h2>I would love to hear more from you.</h2>
        <h3>Want to know more about my projects? My work? Or want to provide me an opportunity of working with you?</h3>
        <a href="mailto:visalr.115@gmail.com"><h2><i className="fa fa-envelope" />visalr.115@gmail.com</h2></a>
        <h2><i className="fa fa-phone" />9738229056</h2>
        <a href="https://www.facebook.com/visalyadav11"><i className="fa fa-facebook"/></a>
        <a href="https://twitter.com/IamVisal"><i className="fa fa-twitter"/></a>
        <a href="https://plus.google.com/113883774652218971747"><i className="fa fa-google-plus"/></a>
        <a href="https://www.instagram.com/visalr115/"><i className="fa fa-instagram"/></a>
        </div>
        </div>
        );
        
export default Contacts;