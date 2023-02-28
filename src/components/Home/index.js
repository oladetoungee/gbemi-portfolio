import LogoTitle from '../../assets/images/ankara.svg'
import { Link, NavLink } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/'
import './index.scss'
import { useState } from 'react'

const Home = () => {
const [letterClass, setletterClass] = useState('text-animate')
const nameArray = ['G', 'B', 'E', 'M', 'I']
    return (
 
        <div className="container home-page">
            <div className="text-zone">
            <h1>Hello, <img src={LogoTitle} alt="Letter G logo"/>  <br/> I'm 
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray} idx={15}
            />
           Gbemi <br/>
       
            </h1>
            <h2>Frontend Developer / Technical Writer / Vue Js / React Js</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        
        </div>

    )
}
export default Home