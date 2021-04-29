import React from 'react'
import {Link} from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        {/* <Link to="home" spy={true} smooth={true}>mpskala</Link> */}
        <a href="/">mpskala</a>
      </div>
      <div className="menu">
        <Link to="works" offset={-50} spy={true} smooth={true} className="works">
          <p>works</p>
        </Link>
        <span/>
        <Link to="contact" spy={true} smooth={true} className="contact">
          <p>contact</p>
        </Link>
      </div>
    </nav>
  )
}

export default Nav