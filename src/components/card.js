import React from 'react'
import {BsArrowDownLeft} from 'react-icons/bs'
import styled from 'styled-components'

const C = styled.div`
  width: 100%;

  .w-inner {
    .w-text-box {
      display: grid;
      grid-template-columns: 45px 1fr auto;
      margin-bottom: 2vw;

      .text-1, .text-2, .text-3 {
        display: flex;
      }

      .text-1 {
        flex-direction: column;
        justify-content: space-between;

        .num {
          display: inline-flex;
          border-radius: 100%;
          width: 20px;
          height: 20px;
          justify-content: center;
          align-items: center;
          border: 2px solid white;
        }
        .year {
          margin: 0;
        }
      }
      .text-2 {
        h2 {
          margin: 0;
          max-width: 18.5ch;
          word-wrap: break-word;

          span {
            font-size: 1.5rem;
            font-weight: 600;
          }
        }
      }
      .text-3 {
        align-items: flex-end;
      }
    }
    .img-container {
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        filter: grayscale(100%);
      }

      .view {
        display: none;
      }
    }
  }
`

const Card = ({index, year, title, source, link}) => {
  const baseUrl = "./assets/images/"
  const imageSource = baseUrl + source
  return (
    <C className={"work-" + (index + 1)}>
      <a href={link} target="blank">
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
              <BsArrowDownLeft size={25}/>
            </div>
          </div>
          <div className="img-container">
            <img src={imageSource} alt=""/>
            <div className="view">view</div>
          </div>
        </div>
      </a>
    </C>
  )
}

export default Card
