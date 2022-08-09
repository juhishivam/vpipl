import React, { useState, useEffect } from "react";
import Common from "./Common";
import Typewriter from "typewriter-effect";
import data from "../images/data.png";
import business from "../images/valuation.png";
import control from "../images/control.jpeg";
import CarouselContainer from "./Carousel";
import { Link, NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Home = () => {
  const [state] = useState({
      title:"HimSal",
      titletwo:"We are the team of tallented",
      title3: " Professionals"
  })
  useEffect(() => {
      Aos.init({duration:2000})
  }, [])
  return (
    <>
      <CarouselContainer />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Our mission is to strengthen Global business by helping
                companies and the CPA firms that advise companies/corporates to
                take full advantage of federal and state tax credits, incentives
                and deductions that are available.
              </p>
              <Link to="/about" className="btn btn-warning abthome">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

                



      {/* Services */}
      <div className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Services</h3>
              {/* <div className="underline mx-auto"></div> */}
              
            </div>
            <div className="col-md-4 ">
                <div className="card shadow">
                    <img src={control} className="w-100 border-bottom" alt="Services"/>
                    <div className="card-body">
                    <h6>Control Assurance</h6>
                    <div className="underline"></div>
                    <p>
                    Control Assurance Of Business And IT Process
                </p>
                <Link to="/service" className="btn btn-link ">
                Read More
              </Link>
                    </div>
                </div>
                
                
              </div>
              <div className="col-md-4 ">
                <div className="card shadow">
                    <img src={business} className="w-100 border-bottom" alt="Services"/>
                    <div className="card-body">
                    <h6>Valuation </h6>
                    <div className="underline"></div>
                    <p>
                    Business Valuation Services
                </p>
                <Link to="/service" className="btn btn-link ">
                Read More
              </Link>
                    </div>
                </div>
                
                
              </div>
              <div className="col-md-4 ">
                <div className="card shadow">
                    <img src={data} className="w-100 border-bottom" alt="Services"/>
                    <div className="card-body">
                    <h6>Data Analytics</h6>
                    <div className="underline"></div>
                    <p>
                    Data Analytics Development Of Statistics And..
                </p>
                <Link to="/service" className="btn btn-link ">
                Read More
              </Link>
                    </div>
                </div>
                
                
              </div>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="container">
          <div className="">
            {/* <div> */}
            <Fade left big>
 <h1>
                <span className="textcontact"  style={{ color: "yellow" }}>
                  Feel Free               
                to Contact Us
                </span>
              </h1></Fade>
              <div className="home2__btn textcontact" >
              <Slide right> <NavLink
                  to="/contact"
                  className="btn btn-outline-primary rounded-pill startbutton"
                >
                  Contact Us
                </NavLink></Slide>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
