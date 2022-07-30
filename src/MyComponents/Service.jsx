import React from "react";
import Card from "../MyComponents/Card";
import Sdata from "../MyComponents/Sdata";

const Service = () => {
  return (
    <>
      {/* <div className="ourservice">
        <h1 className="text-center">Integrated End-to-End Services</h1>
      </div>

      <div className="ourservice1">
        <p className="text-center text-service">
          VP IPL’s mission is to strengthen Global business by helping companies
          and the CPA firms that advise companies/corporates to take full
          advantage of federal
          <br /> and state tax credits, incentives and deductions that are
          available.
        </p>
      </div> */}
       <section className="">
          {/* <div className="aboutimg"> */}
            {/* <img src={about} /> */}
        <div className="servicetop">
        <div  className="container">
          <div className="service_text">
            <div>
              <h1> Our              
                Services
               
              </h1>

            </div>
          </div>
        </div>
      </div>
          {/* </div> */}
        </section>

      <section className="section bg-c-light border-bottom">
        <div className="container">
          {/* <h5 className="main-heading">Our Company</h5> */}
          <h6>AUDIT & ASSURANCE</h6>
          <div className="underline"></div>
          <ul>
            <li>
            ASSIST CPA FIRMS IN FINANCIAL STATEMENT AUDITS, REVIEWS & COMPILATIONS
            </li>
            <li>EMPLOYEE BENEFIT PLAN (EBP) AUDITS</li>
            <li>SINGLE AUDITS & NOT-FOR-PROFIT (NFP) AUDITS</li>
            <li>ASSURANCE SERVICES</li>
          </ul>
          <hr className="line" />
          <h6>ACCOUNTING MANAGED SERVICES (AMS)</h6>
          <div className="underline"></div>
          <ul>
            <li>
            BOOKKEEPING & GL ACCOUNTING
            </li>
            <li>ACCOUNTS RECEIVABLES & PAYABLES</li>
            <li>BANK RECONCILIATIONS/CASH APPLICATIONS</li>
            <li>INVENTORY & FIXED ASSETS ACCOUNTING</li>
            <li>FINANCIAL STATEMENTS PREPARATION</li>
            <li>ACCOUNTING ADVISORY SERVICE (REV REC, LEASE ACCOUNTING ETC.)</li>
            <li>PREPARATION OF STATE TAX & PROPERTY TAX RETURNS ETC.</li>
          </ul>
          <hr className="line" />
          <h6>TAXATION/INTERNATIONAL TAXATION</h6>
          <div className="underline"></div>
          <ul>
            <li>
            TAX COMPLIANCE ASSISTANCE
            </li>
            <li>TAX REFORMS UNDER TAX CUTS AND JOBS ACT (TCJA)</li>
            <li>ELECTIONS, STATEMENTS, AND DISCLOSURES REPORTING</li>
            <li>E-FILING ASSISTANCE</li>
            
          </ul>
          <hr className="line" />
          <h6>CONTROL ASSURANCE OF BUSINESS AND IT PROCESSES</h6>
          <div className="underline"></div>
          <ul>
            <li>
              
              CONTROL TESTING OF BUSINESS AND IT PROCESSES FOR INTERNAL AUDITS,
              SOX, SOC 1/2/3, ETC.
            </li>
            <li>AUTOMATION OF CONTROLS:</li>
          </ul>

          <hr className="line" />
          <h6>BUSINESS VALUATION SERVICES</h6>
          <div className="underline"></div>
          <ul>
            <li> BUSINESS COMBINATIONS / PURCHASE PRICE ALLOCATION</li>
            <li>VALUATION OF EQUITY AND DEBT INSTRUMENTS</li>
            <li>STRATEGIC VALUE ADVISORY</li>
            <li>INTANGIBLE ASSET / INTELLECTUAL PROPERTY VALUATION</li>
            <li>GOODWILL AND INTANGIBLE ASSET IMPAIRMENT BUSINESS</li>
            <li>BUSINESS VALUATION/FIXED ASSET VALUATION</li>
          </ul>
          <hr className="line" />
          <h6>DATA ANALYTICS</h6>
          <div className="underline"></div>
          <ul>
            <li>OUTLIERS ANALYSIS</li>
            <li>
              DEVELOPMENT OF STATISTICAL AND PREDICTIVE MODELS ANALYSING DATA
              AND IDENTIFYING MAJOR FLUCTUATIONS FROM MODEL.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Service;
