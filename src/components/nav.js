import React from 'react'
import {Link} from 'react-scroll'
import styled from 'styled-components'

const Navigation = styled.nav`
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 5vw;

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5vw;

    span {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
    }
  }
  @media (min-width: 767px) {
    padding: 2.5vw 5vw;    
  }
`

const Nav = () => {
  return (
    <Navigation>
      <div className="logo">
        <Link to="home" spy={true} smooth={true}>mpskala</Link>
        {/* <a href="/">mpskala</a> */}
      </div>
      <div className="menu">
        <Link to="works" offset={-100} spy={true} smooth={true} className="works">
          <p>works</p>
        </Link>
        <span/>
        <Link to="contact" offset={-100} spy={true} smooth={true} className="contact">
          <p>contact</p>
        </Link>
      </div>
    </Navigation>
  )
}

export default Nav