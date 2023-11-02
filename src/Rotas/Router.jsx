import React from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home/Home'

export default function Router() {
  return (
    
    <BrowserRouter>
    
      <Routes>

        <Route path='/' element={<Home/>} />

      </Routes>

    </BrowserRouter>
    
  )
}
