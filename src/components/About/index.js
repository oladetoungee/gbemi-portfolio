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
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'

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
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
          <FontAwesomeIcon icon={faHtml5} color="#DD0031"></FontAwesomeIcon>
          </div>
          <div className='face2'>
          <FontAwesomeIcon icon={faCss3} color="#DD0031"></FontAwesomeIcon>
          </div>
          <div className='face3'>
          <FontAwesomeIcon icon={faJsSquare} color="#DD0031"></FontAwesomeIcon>
          </div>
          <div className='face4'>
          <FontAwesomeIcon icon={faVuejs} color="#DD0031"></FontAwesomeIcon>
          </div>
          <div className='face5'>
          <FontAwesomeIcon icon={faReact} color="#DD0031"></FontAwesomeIcon>
          </div>
          <div className='face6'>
          <FontAwesomeIcon icon={faGitAlt} color="#DD0031"></FontAwesomeIcon>
          </div>

        </div>
      </div>
     

      </div>
    </div>
  )
}
export default About