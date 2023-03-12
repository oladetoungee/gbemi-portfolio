import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home/>} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}

export default App
