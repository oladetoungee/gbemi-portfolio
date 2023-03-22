import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/ankara.svg'
import LogoSubtitle from '../../assets/images/pic1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faHashnode,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  
  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/HOME"
       >
      
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
         >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/About"
         >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/Portfolio"
         
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="blog-link"
          to="/Blog"
         
        >
          <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/Contact"
         
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
       
      </nav>
      <ul>
    <li>
    <a 
           href="https://www.linkedin.com/in/oladetoun-gbemisola-3aa7071aa/"
           target="_blank"
           rel="noreferrer"
         >
          <FontAwesomeIcon   icon={faLinkedin} color="#4d4d4e" />
        </a>
    </li>
      <li>
      <a 
         href="https://github.com/OladetounGee"
         target="_blank"
         rel="noreferrer"
         className='github'
         >
          <FontAwesomeIcon  icon={faGithub} color="#4d4d4e" />
        </a>

      </li>
     
      <li>
      <a 
         href="https://hashnode.com/@OladetounGee"
         rel="noreferrer"
         target="_blank"
         className='hashnode'
         >
          <FontAwesomeIcon    icon={faHashnode} color="#4d4d4e" />
        </a>

      </li>
      
      <li>
      <a 
         href="https://twitter.com/OladetounGee"
         target="_blank"
         rel="noreferrer"
         className='twitter'
         >
          <FontAwesomeIcon  icon={faTwitter} color="#4d4d4e" />
        </a>

      </li>
       
      </ul>
      {/* <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon "
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
            className='github'
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="github"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul> */}
      
     
    </div>
  )
}

export default Sidebar