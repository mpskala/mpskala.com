import React from 'react'
import styled from 'styled-components'
import {BsArrowDownRight} from 'react-icons/bs'

import Work from '../components/work'

const WorkSection = styled.section`
  display: flex;
  flex-direction: column;

  .incipit-works {
    max-width: 80%;
    margin: 15vw 0;
    margin-left: auto;
  }

  @media (min-width: 767px) {
    .incipit-works {
      margin: 10vw 0;
      margin-left: auto;
    }
  }

  @media (min-width: 1023px) {
    .incipit-works {
      max-width: 33.75vw;
      margin: 3vw 0 4vw auto;
    }
  }
`

const Works = () => {
  return (
    <WorkSection>
      <div id="works" className="title">
        <p>selected works</p>
        <BsArrowDownRight size={12}/>
      </div>
      <div className="incipit-works">
        <p className="pushed">
        Sites reflect the personality of a company and must convey 
        emotions and messages through the fusion of images, texts 
        and animations.
        <br/>
        My aim is to find a meeting point between the elements to 
        give balance to the composition. Let's see what I'm talking 
        about.
        </p>
      </div>
      <Work/>
    </WorkSection>
  )
}

export default Works
