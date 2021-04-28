import React from 'react'
import {BsArrowDownLeft} from 'react-icons/bs'

const Card = ({index, year, title, source}) => {
  const baseUrl = "./assets/images/"
  const imageSource = baseUrl + source
  return (
    <div className={"w work-" + (index + 1)}>
      <a href="#">
        <div className="w-inner">
          <div className="w-text-box">
            <div className="text-1">
              <span className="num">
                <span>{(index + 1)}</span>
              </span>
              <p className="year">{year}</p>
            </div>
            <div className="text-2">
              <h2>
                <span>{title}</span>
              </h2>
            </div>
            <div className="text-3">
              <BsArrowDownLeft/>
            </div>
          </div>
          <div className="img-container">
            <img src={imageSource} alt=""/>
            <div className="view">view</div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card
