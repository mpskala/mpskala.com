import React from 'react'

import './App.scss'

import Footer from './components/footer'
import Nav from './components/nav'
import Home from './home'

import Cursor from './components/cursor'
import ProgressBar from './components/progressBar'

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Nav/>
      <ProgressBar/>
      <Home/>
      <Footer/>  
    </div>
  );
}

export default App