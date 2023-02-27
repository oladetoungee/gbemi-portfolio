import LogoTitle from '../../assets/images/ankara.svg'
import { Link, NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
const Home = () => {
    return (
 
        <div className="container home-page">
            <div className="text-zone">
            <h1>Hello, <img src={LogoTitle} alt="Letter G logo"/>  <br/> I'm 
           Gbemi <br/>
       
            </h1>
            <h2>Frontend Developer / Technical Writer / Vue Js / React Js</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        
        </div>

    )
}
export default Home