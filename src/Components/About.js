import React from 'react'
import '../Styles/About.css'
import code from '../Images/coding.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className='container'>
        <div>
        <img src={code} alt='image' draggable='false'/>
        </div>
        <div>
        <h3>ABOUT ME</h3>
        <h2>A dedicated Front-end Developer
        based in Bengaluru, India 📍</h2>
        <p>
        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and Redux. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
        </p>
        </div>
      </div>
    </div>
  )
}

export default About