import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

import Car from './pages/Car'
import CarOverview from './pages/CarOverview'
import ModsOverview from './pages/ModsOverview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-darkBg h-[200vh]'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>

          <Route path='/CarOverview' element={<CarOverview/>}></Route>
          <Route path='/ModsOverview' element={<ModsOverview/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
