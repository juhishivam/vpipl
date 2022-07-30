import React from 'react';
import emailjs from 'emailjs-com'
import contact from "../images/contact.jpg";
const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("gmail","template_gaiux3o", e.target,"user_x0boh8Smwzx1UQcF9qcME").then(res =>{
            console.log(res.text);
        }).catch(err => console.log(err.text));
        e.target.reset()
    }
    return (
        <div className="container-lg">
        <div className="connect-us">
          <h3 className="text-center pt-5 t-blue fw-bold">Connect to Us</h3>
          <div className="row">
            <div className="col-md-4 connect-us-form">
              <img src={contact}/>
            </div>
            <div className="col-md-6 mt-5 mx-5 t-blue address">
              <h3>Any Queries?</h3>
              <h4>Contact us on....</h4>
              <h1>+91-9015150805</h1>
              <h2 className="ms-5"></h2>
              <hr/>
              <h4>Ghaziabad
                Uttar Pradesh</h4>
              <h6>Tower 5, E3,
                Gh 07, <br/> Crossing Republic, Ghaziabad <br/> Uttar Pradesh : 201016</h6>
              <h6>vibhutipioneer@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Contact;