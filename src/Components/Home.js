import React from 'react'
import hero from '../Images/Squidward.jpg' 
import '../Styles/Home.css'
import html from '../Images/icons8-html-5-48.png'
import css from '../Images/icons8-css3-48.png'
import js from '../Images/icons8-javascript-48.png'
import react from '../Images/icons8-react-48.png'
import redux from '../Images/icons8-redux-48.png'
import sql from '../Images/icons8-sql-48.png'


const Home = () => {
  return (
    <div className='hero-section'>
    <div id='home' className='home'>
      <div className='hero'>
      <img src={hero} alt='Cactus'/>
      </div>
      <div className='content'>
        <h1>Front-End React Developer</h1>
        <p>Hi, I'm Prajwal. A passionate Front-End React Developer based in Bengaluru, India.</p>
        <span>
          <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a aria-label="github" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in">
            <i class="fa-brands fa-github"></i>
          </a>
        </span>
      </div>
     </div> 
      <div className='techstack'>
        <div>
        <h2>TechStack</h2>
        <hr/>
        </div>
        <div>
        <ul>
          <li>
            <img src={html}/>
          </li>
          <li>
            <img src={css}/>
          </li>
          <li>
            <img src={js}/>
          </li>
          <li>
            <img src={react}/>
          </li>
          <li>
            <img src={redux}/>
          </li>
          <li>
            <img src={sql}/>
          </li>
        </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Home