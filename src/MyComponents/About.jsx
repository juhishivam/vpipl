import React from "react";
import Common from "./Common";
import web from "../images/writing.png";
import about from "../images/about.png";
import Testimonial from "./Testimonial";
import logo from '../images/logo1.png'
import { NavLink } from "react-router-dom";
import Flash from "react-reveal";
import Zoom from "react-reveal/Zoom";

const About = (props) => {
  return (
    <>
      <div>
        {/* <section className=" about py-4 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                <h4>About Us</h4>
              </div>
              <div className="col-md-8 my-auto">
                <h6 className="float-end"> Home / About Us</h6>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className=""> */}
          {/* <div className="aboutimg"> */}
          {/* <img src={about} /> */}
          <div className="about2">
            <div className="container">
              {/* <div className="about_text"> */}
              <div className="about_text">

                  {/* <div className="col-md-6"> */}
                  <h1 className="textabout">
                    <Zoom><span className="textabout"  style={{ color: "yellow" }}> About </span></Zoom>
                    </h1>
                    {/* <div className="row-12"> */}
                    <div className="textcontact">
                      <img  style={{width:"210px"}} src={logo}/>
                    </div>
                  {/* </div> */}
                  
                  
                  
                  {/* </div> */}
                 
                  
                  
              
                
              </div>
              
            </div>
          </div>
          {/* </div> */}
        {/* </section> */}
        <section className="section bg-c-light border-bottom">
          <div className="container">
            <h5 className="main-heading">Our Company</h5>
            <div className="underline"></div>
            <p>
              <span className="tag">VP IPL’s</span> mission is to strengthen
              Global business by helping companies and the CPA firms that advise
              companies/corporates to take full advantage of federal and state
              tax credits, incentives and deductions that are available.
            </p>
            <hr className="line" />
            <p>
              <span className="tag">VP IPL</span> has set up an office in Delhi
              NCR to provide Tax, Advisory, Audit and Accounting services. VP
              IPL comprises a team of skilled professionals who address the most
              pressing needs of CPA Firms as well as Companies. We source the
              best talent so that your firm gets top quality services when
              needed.
            </p>
            <hr className="line" />
            <p>
              {" "}
              Given the substantial shortage of CPAs, we have built a team of
              highly qualified and experienced GAAP/IFRS professionals,
              proficient in GAAP/IFRS, and mostly recruited from the Big Four in
              India.
            </p>
          </div>
        </section>
        <section className="section bg-c-light border-bottom">
          <div className="container">
            <h5 className="main-heading">Recommendation</h5>
            <div className="underline"></div>
            <p>
              “We appreciate your team's effort and promptness in providing
              services par excellence in varied departments. Your efforts enable
              us to further broaden our horizons and anticipate tremendous
              growth”.
            </p>
            <br />
            <p>- S.Mittal,Finance Controller,Airtel , GABON , South Africa</p>
            <hr className="line" />
            <p>
              During the last few months I must say that VP IPL’s team has
              provided excellent services in the field of Business Planning &
              Analysis, Valuations, Financial Reporting, Data Analytics. Their
              knowledge and attention towards details have added value to our
              business processes, helped us in taking informed and sound
              business decisions. Your team has shown the responsiveness and
              speed without compromising work quality . That’s key to a
              strategic partnership. And we appreciate you all for doing such a
              commendable job.
            </p><br/><p>Keep on doing the great work.</p><br/><p>- R.Mishra, Group Chief Financial Officer, LIBERTY Steel Group, India</p>
            
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
