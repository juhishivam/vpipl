import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import HeadShake from 'react-reveal/HeadShake';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';
import Spin from 'react-reveal/Spin';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';

const Footer = () => {
  return (
    <>

      <footer className="w-100 bg-dark text-center footer border-0">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4"
              style={{ marginTop: 50, marginBottom: 50, color: "white" }}
            >

              <h6>
                Company Information
              </h6>
              <hr />
              <p>VP IPL has set up an office in Delhi NCR to provide Tax, Advisory, Audit and
                Accounting services. VP IPL comprises a team of skilled professionals who
                address the most pressing needs of CPA Firms as well as Companies.</p>

            </div>
            <div
              className="col-md-4 "
              style={{ marginTop: 50, marginBottom: 50, color: "white" }}
            >
              <h6 className="h41 text-center">Quick Links</h6>
              <hr />
              <div>
                <Link to="/"> Home</Link>
              </div>
              <div>
                <Link to="/about"> About</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
              <div>
                <Link to="/teams">Our Teams</Link>
              </div>
              <div>
                <Link to="/service">Services</Link>
              </div>

            </div>
            <div
              className="col-lg 4 "
              style={{ marginTop: 50, marginBottom: 50, color: "white" }}
            >
              <h6 className="text-center">Contact Information</h6>
              <hr />
              <div><p className='text-white mb-1'>
                Vibhuti Pioneer India Private Limited
                Corporate Office : 12072, Tower 5, E3,
                Gh 07, Crossing Republic, Ghaziabad
                Uttar Pradesh : 201016
              </p></div>
              <div><p className='text-white mb-1'>
                vibhutipioneer@gmail.com
              </p></div>
              <div><p className='text-white mb-1'>
                +91-9015150805
              </p></div>

            </div>
          </div>
        </div>
        <div> <p className='footer-p'>© 2022 vpipl. All right reserverd</p></div>


      </footer>
    </>
  )
}
export default Footer;