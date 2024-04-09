import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Car from './pages/Car'
import Mod from './pages/Mod'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-darkBg h-[200vh]'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

          <Route path='/Car' element={<Car/>}></Route>
          <Route path='/Mod' element={<Mod/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
