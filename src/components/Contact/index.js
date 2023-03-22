import LogoTitle from '../../assets/images/pic1.jpeg'
import Logo from '../../assets/images/pix.svg'
import { Link, NavLink } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/'
import Sidebar from '../Sidebar/'
import Layout from '../Layout/'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Contact = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['G', 'B', 'E', 'M', 'I']
  const helloArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
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
          />
        </h1>
        <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type={text} name="name" placeholder='Name' required>
                        </input>
                    </li>
                    <li className='half'>
                        <input type={text} name="name" placeholder='Name' required>
                        </input>
                    </li>
                    <li className='half'>
                        <input type={text} name="name" placeholder='Name' required>
                        </input>
                    </li>
                </ul>
                </form>
        </div>
      
      </div>
      <div className="image-zone">
        <div className="content">
        <img src={LogoTitle} alt="Letter G logo" /> 
      <h2>Gbemisola Oladetoun <span>Frontend Developer</span></h2>
      <a href={'https://www.linkedin.com/in/oladetoun-gbemisola-3aa7071aa/'}    target="_blank">Let's make magic!</a> 
        </div>
    
      </div>
    </div>
    <Loader type='pacman'/>
    </div>
  
  )
}
export default Contact
