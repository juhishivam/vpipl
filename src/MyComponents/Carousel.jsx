import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from '../images/frame1.jpg'
import cool1 from '../images/cool.png'
import cool2 from '../images/cool2.png'
import cool3 from '../images/cool3.png'

import image2 from '../images/acc1.jpg'
import image3 from '../images/tax1.jpg'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Wobble from 'react-reveal/Wobble';


 const CarouselContainer = () => {
    return (
        <Carousel controls={true} fade={true}   wrap={true} touch={true} slide={true} pause="hover">
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={cool1}
            alt="First slide"
          />
          <Carousel.Caption className="textC" >
          <Jump><h3 className="textcar" >AUDIT & ASSURANCE</h3></Jump>
            <p className="paracar"> <Fade left><span style={{color:"yellow"}}>Assist CPA Firms In Financial Statement Audits,Reviews & </span><span style={{color:"red"}}>Compilations</span> </Fade></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={cool2}
            alt="Second slide"
          />
          <Carousel.Caption className="textC">
            <h3 className="textcar"><Rotate>ACCOUNTING MANAGED SERVICES (AMS)</Rotate></h3>
            <p className="paracar"><Fade bottom><span style={{color:"yellow"}}>VP IPL Accounting Advisory Service (REV REC, LEASE ACCOUNTING ETC.)</span></Fade></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={cool3}
            alt="Third slide"
          />
          <Carousel.Caption className="textC">
            <h3 className="textcar"><Wobble>BUSINESS VALUATION</Wobble></h3>
            <p className="paracar"><Zoom> <span style={{color:"yellow"}}>Business Valuation/Fixed Asset Valuation.</span></Zoom></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default CarouselContainer
