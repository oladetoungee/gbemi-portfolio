import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
    </>
  )
}

export default App
