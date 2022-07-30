import React from "react";
import Common from "./Common";
import web from "../images/writing.png";
import about from "../images/about.png";
import Testimonial from "./Testimonial";
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
        <section className="">
          {/* <div className="aboutimg"> */}
            {/* <img src={about} /> */}
            <div className="home2">
        <div  className="container">
          <div className="about_text">
            <div>
              <h1><Zoom> About</Zoom>
                <span className="highlight" style={{ color: "white" }}>
                VP IPL’s
                </span>
               
              </h1>

            </div>
          </div>
        </div>
      </div>
          {/* </div> */}
        </section>
        <section className="section bg-c-light border-bottom">
          <div className="container">
            <h5 className="main-heading">Our Company</h5>
            <div className="underline"></div>
            <p>
              <span className="tag">VP IPL’s</span>  mission is to strengthen Global business by helping
              companies and the CPA firms that advise companies/corporates to
              take full advantage of federal and state tax credits, incentives
              and deductions that are available.
            </p>
            <hr className="line"/>
            <p><span className="tag">VP IPL</span> has set up an office in Delhi NCR to provide Tax, Advisory, Audit and
Accounting services. VP IPL comprises a team of skilled professionals who
address the most pressing needs of CPA Firms as well as Companies. We source
the best talent so that your firm gets top quality services when needed.</p>
<hr className="line"/>
<p> Given the substantial shortage of CPAs, we have built a team of highly qualified
and experienced GAAP/IFRS professionals, proficient in GAAP/IFRS, and
mostly recruited from the Big Four in India.</p>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
