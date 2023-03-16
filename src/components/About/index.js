import LogoTitle from '../../assets/images/pic1.jpeg'
import Logo from '../../assets/images/pix.svg'
import { Link, NavLink } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/'
import Sidebar from '../Sidebar/'
import Layout from '../Layout/'
import '../Home/index.scss'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      <Sidebar></Sidebar>

      <div className="container home-page">
        <Layout></Layout>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            My name is Gbemi and I'm helplessly in love with the fact that I can
            change the world, one line of code at a time. It’s amazing how much
            technology has transformed the world and it's equally mind-blowing
            how much I can harness the power of technology to contribute my own
            quota.
          </p>
          <p>
            To me, technical writing and frontend development are more than just
            jobs. They are passions that I pour my heart and soul into every
            single day. I love the feeling of creating something beautiful and
            functional from scratch, and the sense of accomplishment that comes
            with solving a difficult problem.
          </p>
          <p>
            If I'm not coding or writing, you'll most likely find me reading a
            book, playing my guitar or teaching.
          </p>
          <p>
            Once again, my name is Gbemi and I'm excited to work with you and
            bring your digital ideas and vision to life!
          </p>
        </div>
        {/* <div className="image-zone">
        <div className="content">
        <img src={LogoTitle} alt="Letter G logo" /> 
      <h2>Gbemisola Oladetoun <span>Frontend Developer</span></h2>
      <a href={'https://abdelrahman345.netlify.app/'}>Let's make magic!</a> 
        </div>  
      </div> */}
        <div className="skill-container">
          <h2>CORE SKILLS</h2>
          <div class="skills">
            <div class="skill">
              <FontAwesomeIcon icon={faHtml5} ></FontAwesomeIcon>
              <span>HTML5</span>
            </div>
            <div class="skill">
            <FontAwesomeIcon icon={faCss3} ></FontAwesomeIcon>
              <span>CSS3</span>
            </div>
            <div class="skill">
           <FontAwesomeIcon icon={faJsSquare} ></FontAwesomeIcon>
              <span>Javascript</span>
            </div>
          
            <div class="skill">
            <FontAwesomeIcon icon={faReact} ></FontAwesomeIcon>
              <span>ReactJS</span>
            </div>
            <div class="skill">
            <FontAwesomeIcon icon={faVuejs} ></FontAwesomeIcon>
              <span>VueJS</span>
            </div>
            <div class="skill">
            <FontAwesomeIcon icon={faGitAlt} ></FontAwesomeIcon>
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman'/>
    </div>
  )
}
export default About
