import React from 'react'
import '../Styles/Contact.css'
import location from '../Images/icons8-location-48.png'
import mail from '../Images/icons8-mail-48.png'
const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='contact'>
        <h3>CONTACT</h3>
        <h2>Hit me up!</h2>
        <span>
          <img src={location} alt='location' draggable='false'/>
          <div>
          <h4>Location</h4>
          <p>Bengaluru, India</p>
          </div>
          <img src={mail} alt='mail' draggable='false'/>
          <div>
          <h4>Mail</h4>
          <p>prajwalmail042@gmail.com</p>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Contact