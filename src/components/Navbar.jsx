import React from 'react'
import {navLinks}  from '../../constants/index'

const Navbar = () => {
  return (
    <div>
        <a href="#home" className='flex-center gap-2'>
            <p>Mojito</p>
        </a>
        <ul>
            {navLinks.map((links) => (
                <li key={links.id}>
                    <a href={`#${link.id}`}>{links.litle}</a>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar