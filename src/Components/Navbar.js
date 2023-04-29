import React, { useState } from 'react'
import {Link} from 'react-scroll'
import '../Styles/Navbar.css'

const Navbar = () => {
    const[clicked, setClicked] = useState(false);
    const[touch, setTouch] = useState(true);

    const handle = () =>{
        if(clicked === false)
        setClicked(true);
        else
        setClicked(false);
    }

    const handleclick = () =>{
        if(touch === false)
        setTouch(true);
        else
        setTouch(false);
    }
   

  return (
    <nav className='navbar' >
       <Link to='home' className='title' spy={true} smooth={true} offset={-120} duration={500}>
        <h1>
            Prajwal.dev
            </h1>
       </Link>
        <ul id='links' className={clicked?'#links active':'#links'} >
            <li>
                <Link to='about' spy={true} smooth={true} offset={-75} duration={500} onClick={handle}>About</Link>
            </li>
            <li>
                <Link to='work' spy={true} smooth={true}  duration={500} onClick={handle}>Works</Link>
            </li>
            <li>
                <Link to='contact' spy={true} smooth={true}  duration={500} onClick={handle}>Contact</Link>
            </li>
            
        </ul>
        
        <div className='icons' onClick={handle}>
            <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
        </div>
    </nav>
  )
}

export default Navbar