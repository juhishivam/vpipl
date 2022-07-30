import React from 'react'
import web from '../images/hands-2.jpg'
import { NavLink } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Testimonial from './Testimonial';

import { Avatar } from '@material-ui/core'
import download from "../images/download.png";
const teams = () => {
    return (
        <>
            <div className="container-lg">
                <h1 className="text-center team-head t-blue fw-bold">Our Teams</h1>
                <hr />
                <div className="connect-team">
                    {/* <h3 className="text-center pt-5 t-blue fw-bold">Our Team</h3> */}
                    <div className="row">
                        <div className="col-md-4 connect-us-form">
                            <img src={download} />
                        </div>
                        <div className="col-md-6 mt-5 mx-5 t-blue address">
                            <h4>A.Singh</h4>
                            <h5>(Senior Manager – Accounts /Tax/Advisory)</h5>


                            <hr />
                            <ul><li>14 years of experience of Audit & Assurance,
                                Consultancy, tax & reporting, treasury & compliance.
                                across different industries such as Steel, FMCG, IT etc.
                                Worked with Tata group, Deloitte, AAK India and high
                                growth Startups.</li><li>A Chartered Accountant (India), Post-graduate from XLRI
                                    and Certified diploma in IFRS (UK).</li></ul>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container-lg">
                <div className="connect-team">
                    
                    <div className="row">
                        <div className="col-md-4 connect-us-form">
                            <img src={download} />
                        </div>
                        <div className="col-md-6 mt-5 mx-5 t-blue address">
                            <h4>S.Sharma</h4>
                            <h5>(Senior Manager – Accounts/Tax/Audit)</h5>


                            <hr />
                            <ul><li>Finance Professional, offering nearly 12 years of
                                experience with Deloitte and Yatra.com.</li><li>Carry rich experience in managing overall finance
                                    function, maintenance and finalization of accounts,
                                    taxation, audits, internal financial control, risk
                                    assessment and sox/soc compliances.</li></ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-lg">
                <div className="connect-team">

                    <div className="row">
                        <div className="col-md-4 connect-us-form">
                            <img src={download} />
                        </div>
                        <div className="col-md-6 mt-5 mx-5 t-blue address">
                            <h4>S.Agrawal</h4>
                            <h5>(Director & Founder)</h5>


                            <hr />
                            <ul><li>Finance Professional, offering nearly 16
                                years of experience with AG India,
                                Deloitte, Reliance Communication, MTS
                                & Bharti Airtel Limited</li><li>Diversified industrial experience across
                                    various segments such as Audit, Taxation,
                                    Valuations, Business Planning, SOX
                                    Compliances, Risk & Business Advisory.</li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default teams