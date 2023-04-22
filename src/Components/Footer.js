import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='footer'>
      
      <h4>Copyright © 2023. All rights are reserved</h4>
      
      <span>
          <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a aria-label="github" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in">
            <i class="fa-brands fa-github"></i>
          </a>
      </span>
    </div>
    </footer>
  )
}

export default Footer