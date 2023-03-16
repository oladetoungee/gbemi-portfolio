import LogoTitle from '../../assets/images/pic1.jpeg'
import Logo from '../../assets/images/pix.svg'
import { Link, NavLink } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/'
import Sidebar from '../Sidebar/'
import Layout from '../Layout/'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['G', 'B', 'E', 'M', 'I']
  const helloArray = ['H', 'e', 'l', 'l', 'o']
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)

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
            strArray={helloArray}
            idx={15}
          />, <img src={Logo} alt="Letter G logo" /> <br /> I'm
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
        <img src={LogoTitle} alt="Letter G logo" /> 
      <h2>Gbemisola Oladetoun <span>Frontend Developer</span></h2>
      <a href={'https://abdelrahman345.netlify.app/'}>Let's make magic!</a> 
        </div>
    
      </div>
    </div>
    <Loader type='pacman'/>
    </div>
  
  )
}
export default Home
