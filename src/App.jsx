import React from 'react'
import {Route , Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Alert from './components/Alert'
import {Notestate} from './context/Notestate'

export default function App() {
  return (
   <>
   <Notestate>
        <Navbar/>
    <Alert type="success" action="Deleted"/>
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
         </Routes>
   </Notestate>
   </>
  )
}
