
import AnimatedLetters from '../AnimatedLetters/'
import Sidebar from '../Sidebar/'
import Layout from '../Layout/'
import '../Home/index.scss'
import './index.scss'
import { useEffect, useState } from 'react'
import draggableArt from  '../../assets/images/draggableArt.jpg'
import aiArt from '../../assets/images/aiArt.jpg'
import interArt from '../../assets/images/interArt.jpg'
import warehouseArt from '../../assets/images/warehouseArt.jpg'
import Loader from 'react-loaders'

const Blog = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['M', 'Y', ' ', 'A', 'R', 'T', 'I', 'C', 'L', 'E', 'S']
  const projects = [
    {
      title: 'Leveraging AI for better development.',
      photo: aiArt,
      preview: 'https://oladetoungee.hashnode.dev/leveraging-ai-to-become-a-better-developer',
     info: 'AI is transforming the world, and we as developers are at the forefront of this transformation. '
    },
   
    {
      title: 'Using Vue 3 draggable and sortable',
      photo: draggableArt,
      preview: 'https://oladetoungee.hashnode.dev/using-vue-3-draggable-and-sortable',
      info: 'This article explains how to create a draggable and sortable list in Vue 3.'
    },
    {
      title: "With SHiiP, You don't have to deal with storage and warehousing issues",
      photo: warehouseArt,
      preview: 'https://goshiip.com/blog/with-s-hii-p-you-don-t-have-to-deal-with-storage-and-warehousing-issues',
      info: 'The SHiiP warehouse is a secure and convenient storage solution for our customers as it gives them an advantage over other businesses.'
    },
    {
      title: 'Let’s help you go international',
      photo: interArt,
      preview: 'https://goshiip.com/blog/let-s-help-you-go-international',
   
      info: 'In this article, I gave a rundown of certain limitations that you might face while trying to ship abroad during these busy times and vital solutions that SHiiP has provided to help you out.'
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
                    <i className="fas fa-eye"></i> Read
                  </a>
                
                </div>
                <h3>{project.title}</h3>
              <span>{project.info}</span>
              </div>
            ))}

            </div>
      
            <div className="others">
              <h4>
                Other articles are on{' '}
                <a
                  href="https://oladetoungee.hashnode.dev/"
                  target="_blank"
                >
                  HASHNODE
                </a>
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
