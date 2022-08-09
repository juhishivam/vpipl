import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadShake from 'react-reveal/HeadShake';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';
import Spin from 'react-reveal/Spin';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';

const Footer = () => {
  return (
    <>

      {/* <footer className="w-100 bg-dark text-center footer border-0"> */}
      <footer className="w-100 text-center footer border-0">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              style={{ marginTop: 50, marginBottom: 50, color: "white" }}
            >

              <h6>
                Company Information
              </h6>
              <hr />
              <p className='info'>VP IPL has set up an office in Delhi NCR to provide Tax, Advisory, Audit and
                Accounting services. VP IPL comprises a team of skilled professionals who
                address the most pressing needs of CPA Firms as well as Companies.</p>

            </div>
            {/* <div
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

            </div> */}
            <div
              className="col-lg 6"
              style={{ marginTop: 50, marginBottom: 50, color: "white" }}
            >
              <h6 className="text-center">Contact Information</h6>
              <hr />
              <div><p className='text-white mb-1 rightpara '>
                Vibhuti Pioneer India Private Limited<br />
                CP- FF- 4A, Gallaria -2, Crossing Republic<br /> Ghaziabad, U.P -201016
              </p></div>
              <div><p className='text-white mb-1'>
                <i class="fa fa-envelope" aria-hidden="true"></i> info@vibhutipioneer.com
              </p></div>
              <div><p className='text-white mb-1'>
                <i class="fa fa-phone"></i>+91-9015150805
              </p></div>

            </div>
          </div>
          <div className="row footer2">
            <div
              className="col-md-2"
              style={{ marginTop: 20, marginBottom: 50, color: "white" }}
            >

              <h6>
                Quick Links
              </h6>


            </div>
            <div
              className="col-md-2"
              style={{ marginTop: 20, marginBottom: 50, color: "white" }}
            >

              <div>
              <i class="fa fa-home" aria-hidden="true"></i><Link to="/"> Home</Link>
              </div>


            </div>
            <div
              className="col-md-2"
              style={{ marginTop: 20, marginBottom: 50, color: "white" }}
            >

              <div>
              <i class="fa fa-folder-open"></i><Link to="/about"> About</Link>
              </div>


            </div>
            <div
              className="col-md-2"
              style={{ marginTop: 20, marginBottom: 50, color: "white" }}
            >
              <div>
              <i class="fa fa-handshake-o"></i><Link to="/contact"> Contact</Link>
              </div>


            </div>
            <div
              className="col-md-2"
              style={{ marginTop: 20, marginBottom: 50, color: "white" }}
            >
              <div><FontAwesomeIcon icon="fa-solid fa-arrows-down-to-people" />
              <i class="fa fa-group"></i><Link to="/teams"> Our Team</Link>
              </div>


            </div>
            <div
              className="col-md-2"
              style={{ marginTop: 20, marginBottom: 50, color: "white" }}
            >
              <div>
              <i className="fa fa-support"></i><Link to="/service"> Services</Link>
              </div>


            </div>
            

          </div>
        </div>
        {/* <div> <p className='footer-p'> All right reserverd</p></div> */}


      </footer>
    </>
  )
}
export default Footer;