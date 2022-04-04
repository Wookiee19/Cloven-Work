import React from 'react'
import { useEffect,useState, useRef } from 'react';
import './style.css';
import Contact from '../Components/Contact'
import './main.css'
import smartphone from '../asset/smartphone.gif';
import computer from '../asset/computer.gif';
import erp from '../asset/erp-solutions.gif';
import shopping from '../asset/shopping-cart.gif';
import Carnegie from '../asset/Carnegie.jpg';
import google from '../asset/google.gif';
import pi from '../asset/pi.jpg';
import GKTW from '../asset/GKTW.jpg';
import microsoft from '../asset/microsoft.gif';
import research from '../asset/research.gif';
import ui from '../asset/ui.gif';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
import neuraltone11 from "../asset/neuraltone11.gif";
import neuraltone2 from "../asset/neuraltone2.gif";
import nearby1 from "../asset/nearby1.jpg";
import nearby2 from "../asset/nearby.jpg";
import nearby3 from "../asset/nearby3.jpg";
import admin from "../asset/erp-admin.jpg";
import student from "../asset/erp-student.jpg";
import teacher from "../asset/erp-teacher.jpg";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import icon from '../asset/icon.PNG';
import { height } from '@mui/system';
import Twitter from "../asset/twitter-square-brands.svg";
import Instagram from "../asset/instagram-square-brands.svg";

import Facebook from "../asset/instagram-square-brands.svg";

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28rem;
    height: 25rem;
  position: relative;
  margin-left: 38%;
 
  
`;
const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    filter: invert(100%);
    transition: all 0.2s ease-in-out;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
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
const Body = () => {
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

<section className="copy-block aqua ">
        <div className="container eighty-five-percent-width">
          <p className="large" style={{textAlign: 'center'}}><span className="level-3">We are your strategic ally for driving growth through data-driven, people-powered, and action-accelerated solutions. We have shed the constraints of conventional consulting to unlock your company’s potential.</span></p>
        </div>
      </section>
      <section className="copy-block  no-top-padding">
        <div className="container sixty-five-percent-width">
          {/* <h2 style={{textAlign: 'center'}}><span className="level-3 hanging-header">Building for You, That's What We Do!</span></h2> */}
          <p>&nbsp;</p>
          <p className="large" style={{textAlign: 'center'}}><span style={{color: '#69747c'}}>You want to develop the tools you need for your projects. But unfortunately, you
lack the internal resources to get the job done. You've tried other technology firms,
and the results have been dismal.
What we need is Cloven&Works's industry-leading tool development platform.
Through our technologies, we give researchers and academic organizations the
technology, talent, and strategic insights they need for whatever academic or
research project.
See why Cloven&Works' global customers perform better today than ever before.
Talk to us now!

Building for You, That's What We Do!</span></p>
        </div>
      </section>
      <section className="copy-block  no-padding">
        <div className="container ">
          <h2><span className="full-width-level-5">Our Services</span></h2>
        </div>
      </section>
      <section className="repeatable-boxes  ">
        <div className="container flex">
          <a  className="box" target>
            <img src={smartphone} />
            <div>
              <h2 className="level-4">Mobile App Development</h2>
              <p>We empower efficient, resilient, and highly-responsive organizations.</p>
            </div>
          </a>
          <a className="box" target>
            <img src={computer} alt="circle icon with bar chart. Link to Data-Driven Insights page" />
            <div>
              <h2 className="level-4">Website Development</h2>
              <p>We produce intelligence that is meaningful and actionable.</p>
            </div>
          </a>
          <a  className="box" target>
            <img src={erp} alt="circle icon with microchip. Link to Technology Enablement page" />
            <div>
              <h2 className="level-4">ERP Development</h2>
              <p>Modernize digital platforms and unlock potential by providing strategic solutions to address disruptive technology challenges.</p>
            </div>
          </a>
        </div>
      </section>
      <section className="repeatable-boxes  ">
        <div className="container flex">
          <a  className="box" target>
            <img src={shopping} />
            <div>
              <h2 className="level-4">E-Commerce Development</h2>
              <p>We empower efficient, resilient, and highly-responsive organizations.</p>
            </div>
          </a>
          <a  className="box" target>
            <img src={research} alt="circle icon with bar chart. Link to Data-Driven Insights page" />
            <div>
              <h2 className="level-4">Research Planning </h2>
              <p>We produce intelligence that is meaningful and actionable.</p>
            </div>
          </a>
          <a  className="box" target>
            <img src={ui} alt="circle icon with microchip. Link to Technology Enablement page" />
            <div>
              <h2 className="level-4">UI/UX Design</h2>
              <p>Modernize digital platforms and unlock potential by providing strategic solutions to address disruptive technology challenges.</p>
            </div>
          </a>
        </div>
      </section>
      <section className="copy-block  no-padding">
        <div className="container ">
          <h2><span className="full-width-level-5">Our Collborations</span></h2>
        </div>
      </section>
      
      <section className="slider-container" style={{ display:'block', marginLeft:'auto', marginRight:'aut' }} >
      
      </section>
      <section className="copy-block  ">
        <div className="container eighty-five-percent-width">
          <p style={{textAlign: 'center'}}><span className="level-3">We work with businesses of all nature and budgets. Here are some of our happy clients!</span></p>
        </div>
        <section className="repeatable-boxes  ">
        <div className="container flex">
          
          <a  className="box1" target>
            <img src={google} alt="circle icon with bar chart. Link to Data-Driven Insights page" width="380" height="190" />
            
          </a>
          <a className="box1" target>
            <img src={Carnegie} alt="circle icon with microchip. Link to Technology Enablement page" width="380" height="190"/>
            
          </a>
          <a  className="box1" target>
            <img src={pi} alt="circle icon with bar chart. Link to Data-Driven Insights page"  style={{marginTop:"48px"}}width="380" height="190" />
            </a>
          <a  className="box1" target>
            <img src={GKTW} alt="circle icon with bar chart. Link to Data-Driven Insights page" style={{marginTop:"32px"}} width="380" height="190" />
            </a>
        </div>
      </section>
      </section>
      
      <section className="copy-block  no-padding">
        <div className="container ">
          <h2><span className="full-width-level-5">Our Projects</span></h2>
        </div>
      </section>
      <section className="insights-list repeatable-boxes white" >
        <div className="container margin-bottom">
          <div className="flex">
          <div className="box full insight">
          <Carousel 
         autoPlay={true} 
         interval={3000}
         autoFocus={true}
         dynamicHeight={true}
          showThumbs={false}
           infiniteLoop={true}
           showStatus={false}
          
           swipeable={1}
           
           
            >
                <div>
                <img src={neuraltone11} alt="Cone Object" style={{width: 600, height: 250}} />
                </div>
                <div>
                <img src={neuraltone2} alt="Cone Object" style={{width: 600, height: 250}} />
                </div>
               
                
            </Carousel>
              <p className="level-5">
                <span>Neuraltone </span>
                Research
              </p>
              <p className="large">Neuraltone is a research tool developed with the support of Carnegie Mellon
University's Center for Neurological Cognition and Behaviour</p>
<div>
            <a  onClick={handleClickOpen} className="button">See More</a>
          </div>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
          Neuraltone
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          'Neuraltone' is a research tool developed with the support of Carnegie Mellon
University's Center for Neurological Cognition and Behaviour.
The intention is to collect data while maintaining the illusion that the entire
experience is a game. This software calculates passive auditory learning for the
player and collects and analyzes every action they make. This software also adheres
to GDP regulations, as it compiles every player's data.
Essentially, this is a really cool piece of technology that lets experimenters change all
the game parameters and the game stimuli independently for a particular use case.
In addition, different experimenters can run their experiments using their own
settings.
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
            </div>
            <div className="box full insight">
            <Carousel 
         autoPlay={true} 
         interval={3000}
         dynamicHeight={true}
          showThumbs={false}
           infiniteLoop={true}
           showStatus={false}
           swipeable={1}
           useKeyboardArrows ={1} 
           
            
            >
                <div>
                <img src={admin} alt="admin" style={{width: 600, height: 250}}/>
                </div>
                <div>
                <img src={teacher} alt="teacher" style={{width: 600, height: 250}} />
                </div>
                <div>
                <img src={student} alt="student" style={{width: 600, height: 250}} />
                </div>
            </Carousel>
              <p className="level-5">
                <span>School Portal </span>
                ERP
              </p>
              <p className="large">It is a web-based portal
system that students can use to look at their courses, notifications, exam schedules,
apply for leave, ETc.</p>
              <div>
            <a onClick={handleClickOpen1} className="button">See More</a>
          </div>
          <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
          School Portal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Several schools are currently using the 'School Portal'. It is a web-based portal
system that students can use to look at their courses, notifications, exam schedules,
apply for leave, ETc. Essentially, it is a one-stop-shop for all their interactions with
the school.
Parents can ask questions to teachers, view marks, upcoming tests, and chat with
other parents. Besides posting tests, exam schedules, links to extra videos, class
notes, and checking student attendance, teachers can also post exam marks on this
site.
Administrators can add new teachers, promote existing ones, provide transfer
certificates to outgoing students, and view students' records. The school system has
become much more efficient since implementing this program.
          </Typography>
          <Button onClick={handleClose1}>Close</Button>
        </Box>
      </Modal>
            </div>
            <div className="box full insight" >
            <Carousel 
         autoPlay={true} 
         interval={3000}
         
         dynamicHeight={true}
          showThumbs={false}
           infiniteLoop={true}
           showStatus={false}
          
           swipeable={1}
           
           
            >
                <div>
                <img src={nearby1} alt="Cone Object" style={{width: 600, height: 250}} />
                </div>
                <div>
                <img src={nearby3} alt="Cone Object" style={{width: 600, height: 250}} />
                </div>
                <div>
                <img src={nearby2} alt="Cone Object" style={{width: 600, height: 250}} />
                </div>
               
                
            </Carousel>
              <p className="level-5">
                <span>Food Ordering App </span>
                E-Commerce
              </p>
              <p className="large">Ordering App allows customers to discover, buy, and save with
sellers closest to them .</p>
              <div>
            <a onClick={handleClickOpen2} className="button">See More</a>
          </div>
          <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
          Nearbuy Food Ordering App
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          'Nearbuy Food Ordering App' allows customers to discover, buy, and save with
sellers closest to them (hence the name, near-buy). However, developing this type of
software requires much geographical data.
Consequently, we developed a simple food ordering app that shows nearby food
places, like Uber Eats/ Zomato/ Yelp. Our primary aim was to create an ability to
process large amounts of data in real-time. Apache Storm, for example, is a real-time
streaming tool that processes data streams in real-time.
          </Typography>
          <Button onClick={handleClose2}>Close</Button>
        </Box>
      </Modal>
            </div>
            
            
          </div>
          
        </div>
      </section>
      {/* <section className="large-image-with-box" style={{backgroundImage: 'url(../149362069.v2.pressablecdn.com/wp-content/uploads/2017/12/bg-about-cta.jpg)'}}>
        <div className="container">
          <div  className="box" target>
            <h2 className="level-2">We’re a little different than the rest. </h2>
            <a  onClick={handleClickOpen3} className="button">About Cloven&Work</a>
            
          </div>
          <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Changing the world through technological innovation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          We at Cloven&Works are an education and research consultancy that offers
customized solutions tailored to the needs of educational institutions and research
organizations.
Unlike other research and academic support firms, we work with academics and
researchers to create a process tailored to your needs with our professional expertise.
So you won't have to worry about the technology needed to make it work!
We help you develop the technology required for your projects. For example, this
might include making simple educational video games or an Enterprise Resource
Planning (ERP) application. Whatever your research project requires, we deliver. As a
result, we have very diverse experience working with many institutions and
organizations.

          </Typography>
        </Box>
      </Modal>
        </div>
      </section> */}
    
    <Contact/>
    <footer>
    <div>
      <ul class="social-icons">
        <li><a href="https://www.facebook.com/profile.php?id=100077678884545" class="icon-facebook" target="_blank"><img src={Facebook} alt="Instagram" /></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100077678884545" class="icon-linkedin" target="_blank"><img src={Facebook} alt="Instagram" /></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100077678884545" class="icon-instagram" target="_blank"><img src={Facebook} alt="Instagram" /></a></li>
        <li> <a href="mailto:project.cworks@gmail.com?subject=Email From Your Website" target="_blank">
          <img src={Twitter} alt="Gmail" /></a></li>
        </ul>

     
      
      <small class="level-5">&copy; © 2022 Cloven&Work All rights reserved.</small>
    </div>
  </footer>
    {/* <footer>
      <div>
        
      <RightText>
        <ul className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100077678884545" target="_blank">
          <img src={Twitter} alt="Twitter" />
        </a>
        &nbsp;
        <a href="https://www.facebook.com/profile.php?id=100077678884545" target="_blank">
          <img src={Facebook} alt="Instagram" />
        </a>
        &nbsp;
        <a href="mailto:project.cworks@gmail.com?subject=Email From Your Website" target="_blank">
          <img src={Instagram} alt="Gmail" />
        </a>
              </ul>
              </RightText>
        <a href="mailto:project.cworks@gmail.com?subject=Email From Your Website" className="email">project.cworks@gmail.com</a>
    
        <small className="level-5">© 2022 Cloven&Work All rights reserved.</small>
      </div>
    </footer> */}
    </div>
  )
}
export default Body;
