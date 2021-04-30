import React from 'react'

import Header from './sections/header'
import Works from './sections/works'
import Contact from './sections/contact'

const Home = () => {
  return (
    <main id="home" className="home">
      <Header/>
      <Works/>
      <Contact/>
    </main>
  )
}

export default Home