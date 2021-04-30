import React from 'react'
import {BsArrowDownRight} from 'react-icons/bs'

import Header from './sections/header'
import Works from './sections/works'
import Contact from './sections/contact'

const Home = () => {
  return (
    <main id="home" className="home">
      <Header/>
      <div id="works" className="title">
        <p>selected works</p>
        <BsArrowDownRight size={12}/>
      </div>
      <Works/>
      <div id="contact" className="title">
        <p>contact me</p>
        <BsArrowDownRight size={12}/>
      </div>
      <Contact/>
    </main>
  )
}

export default Home