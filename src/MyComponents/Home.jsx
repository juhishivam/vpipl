import React, { useState, useEffect } from "react";
import Common from "./Common";
import whyus from "../images/hands-1.png";
import Typewriter from "typewriter-effect";
import data from "../images/data.png";
import business from "../images/valuation.png";
import control from "../images/control.jpeg";
import CarouselContainer from "./Carousel";
import { Link, NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Zoom from "react-reveal/Zoom";
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
                VP IPL’s mission is to strengthen Global business by helping
                companies and the CPA firms that advise companies/corporates to
                take full advantage of federal and state tax credits, incentives
                and deductions that are available.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="container">
          <div className="home__text">
            <div>
              <h1>
                <span className="highlight" style={{ color: "darkblue" }}>
                  Feel Free
                </span>
                to Contact Us
              </h1>
              <div className="home2__btn">
                <NavLink
                  to="/contact"
                  className="btn btn-outline-primary rounded-pill startbutton"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Vision ,Mission and Values</h3>
              <div className="underline mx-auto"></div>
              
            </div>
            <div className="col-md-4 text-center">
                <h5>Our Vision</h5>
                <p>
                  CONTROL TESTING OF BUSINESS AND IT PROCESSES FOR INTERNAL
                  AUDITS, SOX, SOC 1/2/3, ETC.AUTOMATION OF CONTROLS:
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h5>Our Mission</h5>
                <p>
                VP IPL is planning to have its presence in CANADA UNITED STATES  by year 2023.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h5>Our Core Values</h5>
                <p>
                Our hourly professional charges varies from $50 to $250.
                </p>
              </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
              
            </div>
            <div className="col-md-4 ">
                <div className="card shadow">
                    <img src={control} className="w-100 border-bottom" alt="Services"/>
                    <div className="card-body">
                    <h6>CONTROL ASSURANCE</h6>
                    <div className="underline"></div>
                    <p>
                    CONTROL ASSURANCE OF BUSINESS AND IT PROCESSES
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
                    <h6>VALUATION </h6>
                    <div className="underline"></div>
                    <p>
                    BUSINESS VALUATION SERVICES
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
                    <h6>DATA ANALYTICS</h6>
                    <div className="underline"></div>
                    <p>
                    DATA ANALYTICS DEVELOPMENT OF STATISTICAL AND...
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
    </>
  );
};
export default Home;
