import React from 'react'
import Links from '../components/links'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contacts">
        <div className="contacts-row-1">
          <h3>Hi!</h3>
          <h1>
            <span>I'm Matthew Skala,</span>
            <span>a Computer Science Student</span>
            <span className="end">based in Manchester</span>
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
    </section>
  )
}

export default Contact
