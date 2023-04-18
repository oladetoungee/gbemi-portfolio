import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import Home from '../Home/'

import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      {/* <Sidebar /> */}

      <div className='page'>
          <span className='tags top-tags'>&lt;body&gt;</span>
     
          <span className='tags  bottom-tags'>
          <span className='bottom-tag-html'>           &lt;body&gt;</span>

          <br/>
          <span className='bottom-tag-html'>  &lt;/html&gt;</span>
          </span>
      </div>  

    </div>
  )
}

export default Layout