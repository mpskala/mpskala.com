import React from 'react'
import {Link} from 'react-scroll'
import {BsArrowUp} from 'react-icons/bs'
import styled from 'styled-components'

const NavFooter = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;

  .to-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    .arr {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 16px;

      svg {
        position: relative;
        top: 5px;
        transform: scale(2);
        transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
      }

      .hidden {
        transform: translate3d(0, 100%, 0) scale(2);
      }
    }

    &:hover {
      .arr {
        svg {
          transform: translateY(-15px) scale(2);
        }

        .hidden {
          transform: translate3d(0, -100%, 0) scale(2);
        }
      }
    }
  }
`

const Footer = () => {
  return (
    <NavFooter>
      <p className="year">© 2021 — England</p>
      <Link to="home" spy={true} smooth={true} className="to-top">
        <p>back to top</p>
        <div className="arr">
          <BsArrowUp/>
          <BsArrowUp className="hidden"/>
        </div>
      </Link>
    </NavFooter>
  )
}

export default Footer
