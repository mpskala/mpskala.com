import React from 'react'
import styled from 'styled-components'
import {BsArrowDownRight} from 'react-icons/bs'

import Links from '../components/links'

const ContactSection = styled.section`
  padding-bottom: calc(64px * 1.5);
  margin-top: 15vh;

  .title {
    margin-bottom: 7.5vh;
  }
  
  .contacts {
    .contacts-row-1 {
      display: flex;
      flex-direction: column;
      font-weight: 600;

      h3, h1 {
        font-size: 2rem;
        z-index: 5;
      }

      h3 {
        margin: 0;
      }

      h1 {
        display: flex;
        flex-direction: column;
      }
    }

    .contacts-row-2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;

      .col-1 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        order: 2;
        margin-top: 2vh;
      }

      .col-2 {
        width: 100%;
        margin-top: -8vh;

        .img-cont {
          width: 100%;
          max-width: 220px;
          margin-left: auto;
          margin-right: 5vw;

          img {
            width: 100%;
            height: 100%;
            filter: grayscale(1) opacity(.75);
          }
        }
      }

      .col-3 {
        width: 100%;
        max-width: 220px;
        margin-left: auto;
        margin-right: 5vw;
        order: 3;
        grid-column-start: 2;
        grid-column-end: 3;
      }
    }
  }

  @media (min-width: 767px) {
    padding-bottom: 20vh;

    .contacts {
      .contacts-row-1 {
        h3, h1 {
          font-size: 3.225rem;
        }

        h1 {
          span:last-of-type {
            text-align: end;
          }
        }
      }

      .contacts-row-2 {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 0 3.75vw;

        .col-1 {
          width: calc(100% - 20px);
          margin-top: 5vh;

          p {
            margin-top: auto;
            margin-bottom: calc(7.5vw / 2);
          }
        }

        .col-2 {
          order: 1;
          margin-top: -4vh;

          .img-cont {
            margin: 0;
            max-width: 280px;
          }
        }

        .col-3 {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin: 0;
          margin-top: -12.5vh;
          max-width: 33.333vw;
        }
      }
    }
  }
  
  @media (min-width: 1023px) {
    .contacts {
      .contacts-row-1 {
        flex-direction: row;

        h1 {
          margin-left: auto;
        }
      }

      .contacts-row-2 {
        grid-template-columns: 25vw 1fr 21.25vw;
        justify-content: center;
        align-items: end;

        .col-1 {
          align-self: start;
          order: 1;
          margin-top: 0;
          padding-bottom: 5vh;

          p {
            margin: 0;
          }
        }

        .col-2 {
          .img-cont {
            max-width: 22.75vw;
            margin: 0 auto;
          }
        }

        .col-3 {
          grid-column-start: auto;
          grid-column-end: auto;

          ul {
            margin: 0;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) { 
    .contacts {
      .contacts-row-1 {
        h3, h1 {
          font-size: 4rem;
        }
      }

      .contacts-row-2 {
        grid-template-columns: 20vw 1fr 20vw;
      }
    }
  }
  @media (min-width: 1800px) { 
    padding-bottom: 7.5vh;
    .contacts {
      .contacts-row-1 {
        h3, h1 {
          font-size: 5rem;
        }
      }

      .contacts-row-2 {
        margin-top: -7.5vh;
      }
    }
  }
`

const Contact = () => {
  return (
    <ContactSection>
      <div id="contact" className="title">
        <p>contact me</p>
        <BsArrowDownRight size={12}/>
      </div>
      <div className="contacts">
        <div className="contacts-row-1">
          <h3>Hi!</h3>
          <h1>
            <span>I'm Matthew Skala,</span>
            <span>a Computer Science Graduate</span>
            <span className="end">based in England</span>
          </h1>
        </div>
        <div className="contacts-row-2">
          <div className="col-1">
            <p className="pushed">
              I have worked with a wide range of programming
              languages including Java, C#, HTML, CSS and JavaScript. 
              I am an excellent communicator and leader who can work and thrive 
              in fast-paced environments whilst still being organised. With the 
              experience I already have, I can adapt quickly, effectively 
              and think creatively whilst working as part of an efficient team or independently.
            </p>
          </div>
          <div className="col-2">
            <div className="img-cont">
              <img src={require("../assets/images/scalaStreet.jpg").default} alt=""/>
            </div>
          </div>
          <div className="col-3">
            <Links/>
          </div>
        </div>
      </div>
    </ContactSection>
  )
}

export default Contact
