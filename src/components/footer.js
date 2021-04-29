import React from 'react'
import {Link} from 'react-scroll'
import {BsArrowUp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <p className="year">© 2021 — England</p>
      <Link to="home" spy={true} smooth={true} className="to-top">
        <p>back to top</p>
        <div className="arr">
          <BsArrowUp/>
          <BsArrowUp className="hidden"/>
        </div>
      </Link>
    </footer>
  )
}

export default Footer
