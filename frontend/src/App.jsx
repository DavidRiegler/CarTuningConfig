// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

// eslint-disable-next-line no-unused-vars
import Car from './pages/Car'
import CarOverview from './pages/CarOverview'
import ModsOverview from './pages/ModsOverview'
import Register from './pages/Register'
import Login from './pages/Login'
import Test from './pages/Test'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className='bg-darkBg h-[200vh]'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>

          <Route path='/CarOverview' element={<CarOverview/>}></Route>
          <Route path='/ModsOverview' element={<ModsOverview/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Test' element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
