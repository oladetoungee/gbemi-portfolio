
import AnimatedLetters from '../AnimatedLetters/'
import Sidebar from '../Sidebar/'
import Layout from '../Layout/'
import '../Home/index.scss'
import './index.scss'
import { useEffect, useState } from 'react'
import Mpc from  '../../assets/images/MPC.jpg'
import GeeSplash from '../../assets/images/splash.JPG'
import PowerStream from '../../assets/images/church.JPG'
import Huntr from '../../assets/images/Huntrhome.JPG'
import Loader from 'react-loaders'

const Blog = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['M', 'Y', ' ', 'A', 'R', 'T', 'I', 'C', 'L', 'E', 'S']
  const projects = [
    {
      title: 'My Pocket Counsel',
      photo: Mpc,
      preview: 'https://mypocketcounsel.com/',
      github: 'https://github.com/MyPocketCounsel/templatelibrary',
      info: 'MPC is a solution that leverage next-generation technology to automate your contract generation'
    },
   
    {
      title: 'Huntr',
      photo: Huntr,
      preview: 'https://huntr.netlify.app/',
      github: 'https://github.com/oladetoungee/Huntr',
      info: 'With Huntr, users can boost their skills and profile, be provided with personalised career guidance and matched with the right opportunities'
    },
    {
      title: 'GeeSplash',
      photo: GeeSplash,
      preview: 'https://geesplash.netlify.app/',
      github: 'https://github.com/oladetoungee/Huntr',
      info: 'Inspired by unsplash, Geesplash provides users with random images they need'
    },
    {
      title: 'PowerStream',
      photo: PowerStream,
      preview: 'https://powerstreamweb.netlify.app/',
      github: 'https://github.com/oladetoungee/Powerstreamweb',
      info: 'Powerstream is a church website specifically built for my church to help members and intending members get information about church activities'
    },
  
  ]

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
          <section className="projects">
           
            <div  className="projects__items grid">
            {projects.map((project) => (
              <div className="projects__item" key={project.title}>
                <img
                  src={project.photo}
                  className="projects__image"
                  alt="My Project"
                /> 
                <div className="projects__btns">
                  <a
                    href={project.preview}
                    className="projects__btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-eye"></i> Preview
                  </a>
                  <a
                    href={project.github}
                    className="projects__btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Github
                  </a>
                </div>
                <h3>{project.title}</h3>
              <span>{project.info}</span>
              </div>
            ))}

            </div>
      
            <div className="others">
              <h4>
                Other projects are on{' '}
                <a
                  href="https://github.com/oladetoungee?tab=repositories"
                  target="_blank"
                >
                  GITHUB
                </a>{' '}
                and details can be provided upon request.
              </h4>
            </div>

            <footer>&copy; Copyright 2023</footer>
          </section>
         
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}
export default Blog
