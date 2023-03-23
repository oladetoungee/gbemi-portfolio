import LogoTitle from '../../assets/images/pic1.jpeg'
import Logo from '../../assets/images/pix.svg'
import { Link, NavLink } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/'
import Sidebar from '../Sidebar/'
import Layout from '../Layout/'
import './index.scss'
import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const refForm = useRef()
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
  const sendEmail = (e) => {
    e.preventDefault()
  
    emailjs
    .sendForm(
      'service_n2vamln',
      'template_8miuxgd',
      refForm.current,
      'vxXdZnyRtODP67G_l'
    )
    .then (
      () => {
        alert('Your Message has been sent to Gbemisola')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send message, please try again')
      }
    )
  }
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
              key={'helloArray'}
            />
          </h1>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Input email address"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject of your email"
                    required
                  ></input>
                </li>
                <li className="half">
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Type your message to Gbemi here"
                    required
                  ></textarea>
                </li>
                <li className="half">
                  <input
                    type="submit"
                    name="submit"
                    value="Send"
                    required
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="image-zone">
          <div className="content">
            <img src={LogoTitle} alt="Letter G logo" />
            <h2>
              Gbemisola Oladetoun <span>Frontend Developer</span>
            </h2>
            <a
              href={
                'https://www.linkedin.com/in/oladetoun-gbemisola-3aa7071aa/'
              }
              target="_blank"
            >
              Let's make magic!
            </a>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}
export default Contact
