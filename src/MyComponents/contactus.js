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
              <p className='info'><i class="fas fa-address-card" style={{font:"48px", color:"red"}}></i> CP- FF- 4A
              Gallaria -2, <br/> Crossing Republic, Ghaziabad <br/> Uttar Pradesh : 201016</p>
                <p><i class="fa fa-phone" style={{font:"48px", color:"red"}}></i> Phone: 91-9015150805</p>
                <p><i class="fa fa-envelope" style={{font:"48px", color:"red"}}></i> Email: info@vibhutipioneer.com </p>
            </div>
            </div>

          </div>

        </div>

      </div>
    )
}
export default Contactus;