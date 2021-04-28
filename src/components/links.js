import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'

const Links = () => {
  const extLinks = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mpskala/'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mpskala/'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/mpskala'
    },
  ]
  return (
    <ul className="contact-social">
      {extLinks.map((link) => {
        return (
          <li className="social">
            <a href={link.link} className="item">
              {link.name}
              <span className="gray">
                <p>Link</p>
                <BsArrowUpRight/>
              </span>
            </a>
          </li>
        )
      })}
      <li className="social">
        <a href="mailto:mpskala@outlook.com" className="item">
          Email
          <span className="gray">
            <p>Send</p>
          </span>
        </a>
      </li>
      <li className="social">
        <a href="../documents/CV.pdf" className="item">
          CV
          <span className="gray">
            <p>View</p>
          </span>
        </a>
      </li>
    </ul>
  )
}

export default Links
