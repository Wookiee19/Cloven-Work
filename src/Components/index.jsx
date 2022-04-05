import React from 'react'
import { useEffect,useState, useRef } from 'react';
import './style.css';
import Contact from '../Components/Contact'
import './main.css'
import office from '../asset/office.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styled from "styled-components";
import icon3 from '../asset/logo2.png';
import icon4 from '../asset/logo3.jpg';
import icon from '../asset/icon.jpg';
import icon1 from '../asset/logo1.png';
import Body from '../Components/body';


const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28rem;
    height: 25rem;
  position: relative;
  margin-left: 38%;
 
  
`;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const Index = () =>{
  const [open, setOpen] =useState(false);
  const [open1, setOpen1] =useState(false);
  const [open2, setOpen2] =useState(false);
  const [open3, setOpen3] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  return (
    <div>
      
    <header className="header">
      
      <div className="top-bar container">
      <a className="logo"   rel="home">
        {/* <img className="logo1" src={icon3} max-width="100%" height="110%"/> */}
        <p className="page-title1">Cloven&Works</p>
        
      </a>
      <p className="page-title">Transforming Your Presence</p>
        {/* <button id="primary-trigger" className="hamburger hamburger--spin" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button> */}
      </div>
      <div id="primary">
        <div>
          <nav id="nav-main" className="nav-main" role="navigation">
            <ul>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-31">
                <a target href="about/index.html" className="level-2">About</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-30">
                <a target href="work/index.html" className="level-2">Work</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-29">
                <a target href="people/index.html" className="level-2">People</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-28">
                <a target href="careers/index.html" className="level-2">Careers</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-41">
                <a target href="insights/index.html" className="level-2">Insights</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-40">
                <a target href="contact/index.html" className="level-2">Contact</a>
              </li>
            </ul>
          </nav>{/* #nav */}
          <div className="secondary">
            <nav id="nav-contact" className="nav-contact" role="navigation">
              <ul>
                <li>
                  <h2 className="level-5 aqua">Email</h2>
                  
                </li>
               
              </ul>
            </nav>
            <nav id="nav-social" className="nav-social" role="navigation">
              <h2 className="level-5 aqua">Social</h2>
             
            </nav>
          </div>
        </div>
      </div>
    </header>
    <section id="content" role="main" className="content-wrapper">
 
      <section className="video background hero " >
     
    
    <img src={office} style={{width:'100%'}}></img>

      
      
        <div className="overlay">
          <h2 style={{textAlign: 'center'}}><span className="level-1">Building for You, That's What We Do!</span></h2>
        </div>
      </section>
      </section>
    <Body/>
  </div>
  )
}

export default Index