import React from 'react';
import Slider from '../component/Slider';
import '../App.css';

const Header = () => (
    <div className="App-header">
        <Slider />
    <a href="#root" className="openbtn" aria-hidden>
    <i className="fa fa-bars"/></a>
    <h2 className="myname" >Visal Yadav</h2>
    <a href="https://github.com/visalr115"><i className="fa fa-github" /></a>
    <a href="https://www.linkedin.com/in/visalyadav/"><i className="fa fa-linkedin" /></a> 
  </div>
  );
  
export default Header;