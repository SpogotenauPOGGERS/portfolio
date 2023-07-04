// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Pages/Layout'
import Startseite from './Pages/Startseite'
import AboutMe from './Pages/AboutMe'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Startseite />} />
          <Route path='überMich' element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App