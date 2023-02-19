import React from 'react';
import emailjs from 'emailjs-com'
import contact from "../images/contact.jpg";
const Contactus = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("gmail","template_gaiux3o", e.target,"user_x0boh8Smwzx1UQcF9qcME").then(res =>{
            console.log(res.text);
        }).catch(err => console.log(err.text));
        e.target.reset()
    }
    return (
      
      <div className='container'>
        <div className='card shadow contactshadow'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-6 connect-us'>
              <img style={{width:"100%"}} src={contact}/>
              </div>
            <div className='col-md-6 border-start'>
              <h5>Address </h5>
              <div className='underline'></div>
              <p className='info'><i class="fas fa-address-card" style={{font:"48px", color:"red"}}></i>12072, 12th Floor 5,GH07
               <br/> Crossing Republic, Ghaziabad <br/> Uttar Pradesh : 201016</p>
                <p><a href ="tel:91-9015150805"><i class="fa fa-phone" style={{font:"48px", color:"red"}}></i> Phone: 91-9015150805</a></p>
                <p><a href="mailto:info@vibhutipioneer.com"><i class="fa fa-envelope" style={{font:"48px", color:"red"}}></i> Email: info@vibhutipioneer.com </a></p>
            </div>
            </div>

          </div>

        </div>

      </div>
    )
}
export default Contactus;