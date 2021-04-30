import React from 'react'
import styled from 'styled-components'

import Links from '../components/links'

const ContactSection = styled.section`
  padding-bottom: calc(64px * 3);

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
        margin-bottom: calc(64px / 2);
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
    .contacts {
      .contacts-row-1 {
        h3, h1 {
          font-size: 3.225rem;
        }

        h3 {
          margin: 0;
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
`

const Contact = () => {
  return (
    <ContactSection>
      <div className="contacts">
        <div className="contacts-row-1">
          <h3>Hi!</h3>
          <h1>
            <span>I'm Matthew Skala,</span>
            <span>a Computer Science Student</span>
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
