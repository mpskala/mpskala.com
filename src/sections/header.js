import React from 'react'
import {BsArrowDown} from 'react-icons/bs'

const Header = () => {
  return (
    <section className="header">
      <h1>
        <span>Unusual guy</span>
        <span>in an</span>
        <span>"ordinary" world</span>
      </h1>
      <div className="hero-img">
        <img src={require("../assets/images/ss-min.jpg").default} alt=""/>
      </div>
      <div className="arrow">
        <BsArrowDown/>
      </div>
    </section>
  )
}

export default Header
