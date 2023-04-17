import React, { useState } from 'react'
import {Link} from 'react-scroll'
import '../Styles/Navbar.css'

const Navbar = () => {
    const[clicked, setClicked] = useState(false);

    const handle = () =>{
        if(clicked === false)
        setClicked(true);
        else
        setClicked(false);
    }

  return (
    <nav className='navbar' >
       <Link to='home' spy={true} smooth={true} offset={-120} duration={500}>Prajwal</Link>
        <ul id='links' className={clicked?'#links active':'#links'}>
            <li>
                <Link to='about' spy={true} smooth={true} offset={-120} duration={500}>About</Link>
            </li>
            <li>
                <Link to='work' spy={true} smooth={true} offset={-120} duration={500}>Works</Link>
            </li>
            <li>
                <Link to='contact' spy={true} smooth={true} offset={-120} duration={500}>Contact</Link>
            </li>
        </ul>
        <div className='icons' onClick={handle}>
            <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
        </div>
    </nav>
  )
}

export default Navbar