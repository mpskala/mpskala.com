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
          color: gray;
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
      transition: .5s;
      
      img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        filter: grayscale(100%);
        transition: .5s;
      }
      
      .view {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: .75s;
        text-align: center;
        display: none;
      }
    }
  }
  
  @media (min-width: 1200px) {
    .w-inner {
      .w-text-box {
        grid-template-columns: 3.75vw 1fr auto;
        
        .text-1 {
          .year {
            margin-top: auto;
            margin-bottom: .1vw;
          }
        }
        
        .text-2 {
          h2 {
            max-width: 40ch;
            word-wrap: break-word;
            
            span {
              font-size: 3rem;
              font-weight: 600;
            }
          }
        }
      }
      .img-container {
        img {
          max-height: 350px;
        }

        &:hover {
          transform: scale(.95);

          img {
            opacity: .4;
            transform: scale(1.2);
          }

          .view {
            display: flex;
            flex-direction: column;
            opacity: 1;
            font-size: 18px;
          }
        }
      }
    }
  }

  @media (min-width: 1800px) {
    .w-inner {
      .img-container {
        img {
          max-height: 25vw;
        }
      }
    }
  }
`
    
const Card = ({index, year, title, source, link, external}) => {
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
            <div className="view">
              view
              {external ? <span className="external">(external)</span> : ''}
            </div>
          </div>
        </div>
      </a>
    </C>
  )
}

export default Card
