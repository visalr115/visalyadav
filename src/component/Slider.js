import React from 'react';
import '../App.css';

const Slider = () => (
  <nav id="nav">
    <div className="sidenav">
      <div className="slideHeader">
      <img className="smallpic" alt="" src="/image/profile.JPG"/>
        <h1>Explore</h1>
        <a href="#!" className="closebtn">
          <i className="fa fa-times" />
        </a>
      </div>
      <div className="links">
        <a href="https://www.instagram.com/visalr115/"><h3><i className="fa fa-file sidelink"/>My Resume</h3></a>
        <a href="https://angel.co/visal-yadav?public_profile=1"><h3><i className="fa fa-angellist sidelink"/>AngelList</h3> </a>
        <a href="https://www.linkedin.com/in/visalyadav/"><h3><i className="fa fa-linkedin sidelink" />Linkedin</h3></a>
        <a href="https://github.com/visalr115"><h3><i className="fa fa-github sidelink" />GitHub</h3></a>
        <a href="mailto:visalr.115@gmail.com"><h3><i className="fa fa-envelope sidelink" />visalr.115@gmail.com</h3></a>
        <a href="https://github.com/visalr115"><h3><i className="fa fa-github sidelink" />GitHub</h3></a>
        <a href="https://www.facebook.com/visalyadav11"><h3><i className="fa fa-facebook sidelink"/>Facebook</h3></a>
        <a href="https://www.instagram.com/visalr115/"><h3><i className="fa fa-instagram sidelink"/>Instagram</h3></a>
        <a><h3><i className="fa fa-phone sidelink" />9738229056</h3></a>
        </div>
    </div>
    <div className="backdrop" />
  </nav>
);

export default Slider;