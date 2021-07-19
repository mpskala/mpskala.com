import React from 'react'
import {Link} from 'react-scroll'
import styled from 'styled-components'

import {ReactComponent as Logo} from '../assets/images/logo-circle.svg'

const Navigation = styled.nav`
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    span {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
    }
  }
`

const colour = "white"

const Nav = () => {
  return (
    <Navigation>
      <div className="logo">
        <Link to="home" spy={true} smooth={true}>
          <Logo fill={colour} stroke={colour} width="75px" height="100%" />
        </Link>
      </div>
      <div className="menu">
        <Link to="works" offset={-60} spy={true} smooth={true} className="works">
          <p>works</p>
        </Link>
        <span/>
        <Link to="contact" offset={-60} spy={true} smooth={true} className="contact">
          <p>contact</p>
        </Link>
      </div>
    </Navigation>
  )
}

export default Nav