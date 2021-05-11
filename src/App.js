import React, {useState, useEffect} from 'react'

import './App.scss'

import Footer from './components/footer'
import Nav from './components/nav'
import Home from './home'

import Cursor from './components/cursor'
import ProgressBar from './components/progressBar'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return windowSize;
}

function App() {
  const size = useWindowSize();
  return (
    <div className="App">

      {console.log(size.width)}
      {size.width > 1025 ? (
        <>
          <Cursor/>
          <ProgressBar/>
        </>  
      ) : ''}
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App