import React from 'react'

import Card from './card'

const Work = () => {
  // images go into public image folder
  const cardInfo = [
    {
      title: 'COVID-19 Infection Tracker',
      year: '2021',
      img: 'covid.png'
    },
    {
      title: 'Video to GIF Converter',
      year: '2021',
      img: 'gifmakr.png'
    },
    {
      title: 'Title',
      year: '2021',
      img: 'skyGarden.jpg'
    },
    {
      title: 'Title',
      year: '2021',
      img: 'skyGarden.jpg'
    },
  ]
  return (
    <div className="works">
      {
        cardInfo.map((info, index) => {
          return <Card index={index} title={info.title} year={info.year} source={info.img}/>
        })
      }
    </div>
  )
}

export default Work
