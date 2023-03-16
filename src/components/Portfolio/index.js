import LogoTitle from '../../assets/images/pic1.jpeg'
import Logo from '../../assets/images/pix.svg'
import { Link, NavLink } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/'
import Sidebar from '../Sidebar/'
import Layout from '../Layout/'
import '../Home/index.scss'
import './index.scss'
import { useEffect, useState } from 'react'
import Mpc from  '../../assets/images/MPC.jpg'
import Shiip from '../../assets/images/Shiip.JPG'
import Huntr from '../../assets/images/Huntrhome.JPG'
import Loader from 'react-loaders'

const Portfolio = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['M', 'Y', ' ', 'P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']
  const projects = [
    {
      title: 'My Pocket Counsel',
      photo: Mpc,
      preview: 'https://mpcwebdemo1.web.app/',
      github: 'https://github.com/MyPocketCounsel/templatelibrary',
    },
    {
      title: 'SHiiP',
      photo: Shiip,
      preview: 'https://app.goshiip.com/',
      github: 'https://github.com/MyPocketCounsel/templatelibrary',
    },
    // {
    //   title: 'Huntr',
    //   photo: Huntr,
    //   preview: 'https://huntr.netlify.app/',
    //   github: 'https://github.com/oladetoungee/Huntr',
    // },
    // {
    //     title: 'My Pocket Counsel',
    //     photo: Mpc,
    //     preview: 'https://mpcwebdemo1.web.app/',
    //     github: 'https://github.com/MyPocketCounsel/templatelibrary',
    //   },
    //   {
    //     title: 'SHiiP',
    //     photo: Shiip,
    //     preview: 'https://app.goshiip.com/',
    //     github: 'https://github.com/MyPocketCounsel/templatelibrary',
    //   },
    //   {
    //     title: 'Huntr',
    //     photo: Huntr,
    //     preview: 'https://huntr.netlify.app/',
    //     github: 'https://github.com/oladetoungee/Huntr',
    //   },
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
                <h4>{project.title}</h4>
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

            <footer>&copy; Copyright 2022</footer>
          </section>
          {/* <div className="project">
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
                <h4>{project.title}</h4>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}
export default Portfolio
