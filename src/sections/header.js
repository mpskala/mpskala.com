import React from 'react'
import {BsArrowDown} from 'react-icons/bs'
import styled from 'styled-components'

const Head = styled.section`
  display: flex;
  padding-top: 25vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;

  .intro {
    width: 100%;
    z-index: 5;

    h1 {
      display: flex;
      flex-direction: column;
      font-size: 12.5vw;
      font-weight: 600;

      .middle {
        display: flex;
        align-items: center;

        .intro-text-big {
          display: none;
          margin-left: auto;
          max-width: 300px;
        }
      }

      .last {
        display: flex;
        flex-direction: column;

        span:last-of-type {
          text-align: end;
        }
      }
    }
  
    .intro-text {
      max-width: 240px;
    }
  }

  .hero-img {
    position: absolute;
    width: 75vw;
    height: 60vh;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%) opacity(.25);
    }
  }

  .arrow {
    position: relative;
    top: 12.5vh;

    svg {
      transform: scale(2);
    }
  }

  @media (min-width: 767px) {
    height: 100vh;
    padding: 0;
    
    .intro h1 .middle .intro-text-big {
      display: block;
    }
    .intro-text {
      display: none;
    }
  }
`

const Header = () => {
  return (
    <Head>
      <div className="intro">
        <h1>
          <span>Unusual guy</span>
          <div className="middle">
            <span>in an</span>
            <div className="intro-text-big">
              <p className="pushed">
              Normality is the watchword of the modern world. 
              Anything that goes beyond is a risk: either it 
              fascinates or frightens, and I love to take risks.
              </p>
            </div>
          </div>
          <div className="last">
            <span>"ordinary"</span>
            <span>world</span>
          </div>
        </h1>
        <div className="intro-text">
          <p className="pushed">
          Normality is the watchword of the modern world. 
          Anything that goes beyond is a risk: either it 
          fascinates or frightens, and I love to take risks.
          </p>
        </div>
      </div>
      <div className="hero-img">
        <img src={require("../assets/images/ss-min.jpg").default} alt=""/>
      </div>
      <div className="arrow">
        <BsArrowDown size={25}/>
      </div>
    </Head>
  )
}

export default Header


