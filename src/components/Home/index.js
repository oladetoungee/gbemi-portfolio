import LogoTitle from '../../assets/images/ankara.svg'
import { Link, NavLink } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/'
import './index.scss'
import { useEffect, useState } from 'react'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['G', 'B', 'E', 'M', 'I']
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello, <img src={LogoTitle} alt="Letter G logo" /> <br /> I'm
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
        </h1>
        <h2>Frontend Developer / Technical Writer / Vue Js / React Js</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="image-zone">
        <div className="content">
        <img src={'https://abdelrahman345.netlify.app/images/me.jpg'} alt="Letter G logo" /> 
      <h2>Gbemisola Oladetoun <span>Frontend Developer</span></h2>
      <a href={'https://abdelrahman345.netlify.app/'}>Let's make magic!</a> 
        </div>
    
      </div>
    </div>
  )
}
export default Home
