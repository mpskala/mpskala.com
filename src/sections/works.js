import React from 'react'
import styled from 'styled-components'

import Work from '../components/work'

const WorkSection = styled.section`
  display: flex;
  flex-direction: column;

  .incipit-works {
    max-width: 80%;
    margin: 0 0 15vw auto;
  }
`

const Works = () => {
  return (
    <WorkSection>
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
