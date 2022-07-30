import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from '../images/frame1.jpg'
import image2 from '../images/acc1.jpg'
import image3 from '../images/tax1.jpg'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Wobble from 'react-reveal/Wobble';


 const CarouselContainer = () => {
    return (
        <Carousel controls={false} fade={true} pause={false} className="carosole">
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="textC" >
          <Jump><h3 className="textcar" >AUDIT & ASSURANCE</h3></Jump>
            <p className="paracar"> <Fade left>ASSIST CPA Firms In Financial Statement Audits, Reviews & Compilations</Fade></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="textC">
            <h3 className="textcar"><Rotate>ACCOUNTING MANAGED SERVICES (AMS)</Rotate></h3>
            <p className="paracar"><Fade bottom>VP IPL Accounting Advisory Service (REV REC, LEASE ACCOUNTING ETC.)</Fade></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="textC">
            <h3 className="textcar"><Wobble>(BUSINESS VALUATION)</Wobble></h3>
            <p className="paracar"><Zoom> Business Valuation/Fixed Asset Valuation.</Zoom></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default CarouselContainer
