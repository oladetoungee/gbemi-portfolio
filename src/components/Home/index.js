import LogoTitle from '../../assets/images/logoS.png'
import { Link, NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
            <h1>Hello, <br/> My name is
            <img src={LogoTitle} alt="Letter G logo"/>
            Gbemi
            <br/>
            web developer
            </h1>
            <h2>Frontend Developer / Technical Writer / Vue Js / React Js</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        
        </div>
    )
}
export default Home