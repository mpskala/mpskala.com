import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import styled from 'styled-components'

const ListStyle = styled.ul`
  margin-top: 5vh;
  list-style: none;
  
  .social {
    position: relative;
    border-bottom: 1px solid #fff;
    overflow: hidden;
    transition: .2s;
    
    .item {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      transition: .2s;
      
      span {
        color: gray;
        display: flex;
        flex-direction: row;
        
        p {
          margin: 0;
          margin-right: 5px;
        }
        
        svg {
          transform: scale(1.2);
          transition: .25s;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .social:hover {
      .item {
        padding: .75vw 1vw;
        
        span {
          svg {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
`

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
    <ListStyle>
      {extLinks.map((link, index) => {
        return (
          <li key={index} className="social">
            <a href={link.link} className="item" target="blank">
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
        <a href="/documents/CV.pdf" className="item" target="blank" rel="norefferer">
          CV
          <span className="gray">
            <p>View</p>
          </span>
        </a>
      </li>
    </ListStyle>
  )
}

export default Links
