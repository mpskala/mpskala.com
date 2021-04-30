import React from 'react'
import styled from 'styled-components'

import Card from './card'

const Works = styled.div`
  display: grid;
  width: 80vw;
  margin: 0 auto;
  gap: 2.5vh;
  z-index: 2;

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;

    .work-2 {
      margin-top: 10vh;
    }

    .work-3 {
      margin-top: -5vh;
    }

    .work-4 {
      margin-top: 5vh;
    }
  }
`

const Work = () => {
  // images go into public image folder
  const cardInfo = [
    {
      title: 'COVID-19 Infection Tracker',
      year: '2021',
      img: 'covid.png',
      link: 'https://github.com/mpskala/covid-trackr',
    },
    {
      title: 'Video to GIF Converter',
      year: '2021',
      img: 'gifmakr.png',
      link: 'https://github.com/mpskala/gifmakr',
    },
    {
      title: 'Title',
      year: '2021',
      img: 'sg-min.jpg',
      link: 'https://github.com/mpskala',
    },
    {
      title: 'Title',
      year: '2021',
      img: 'sg-min.jpg',
      link: 'https://github.com/mpskala',
    },
  ]
  return (
    <Works>
      {
        cardInfo.map((info, index) => {
          return <Card index={index} title={info.title} link={info.link} year={info.year} source={info.img}/>
        })
      }
    </Works>
  )
}

export default Work
