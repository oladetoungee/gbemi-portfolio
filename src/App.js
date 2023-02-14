import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/HOME" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
