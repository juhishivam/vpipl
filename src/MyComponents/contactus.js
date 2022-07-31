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
      //   <div className="container-lg">
      //   <div className="connect-us">
      //     <h3 className="text-center pt-5 t-blue fw-bold">Connect to Us</h3>
      //     <div className="row">
      //       <div className="col-md-4 connect-us-form">
      //         <img src={contact}/>
      //       </div>
      //       <div className="col-md-6 mt-5 mx-5  t-blue address">
      //         <h3>Any Queries?</h3>
      //         <h4>Contact us on..</h4>
      //         <h4>+91-9015150805</h4>
      //         <hr/>
      //         <h4>Ghaziabad
      //           Uttar Pradesh</h4>
      //         <h6>Tower 5, E3,
      //           Gh 07, <br/> Crossing Republic, Ghaziabad <br/> Uttar Pradesh : 201016</h6>
      //         <h6>vibhutipioneer@gmail.com</h6>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className='container'>
        <div className='card shadow'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-6 connect-us'>
              <img src={contact}/>
              </div>
            <div className='col-md-6 border-start'>
              <h5>Address Information</h5>
              <div className='underline'></div>
              <p>Tower 5, E3,
                Gh 07, <br/> Crossing Republic, Ghaziabad <br/> Uttar Pradesh : 201016</p>
                <p><i class="fa fa-check"></i>Phone: 91-9015150805</p>
                <p><i class="fa fa-check"></i>Email: vibhutipioneer@gmail.com </p>
            </div>
            </div>

          </div>

        </div>

      </div>
    )
}
export default Contact;