import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import AdsPage from '../pages/adsPage'
import AuthPage from '../pages/AuthPage'

const routeConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:id' element={<AdsPage />} />
        <Route path='/login' element={<AuthPage />} />
    </Routes>
  )
}

export default routeConfig