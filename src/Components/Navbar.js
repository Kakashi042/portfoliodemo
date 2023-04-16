import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav>
       <Link to='home'>Prajwal</Link>
        <ul>
            <li>
                <Link to='about'>About</Link>
            </li>
            <li>
                <Link to='work'>Works</Link>
            </li>
            <li>
                <Link to='contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar