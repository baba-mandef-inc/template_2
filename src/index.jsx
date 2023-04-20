import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFoundError from './pages/NotFoundError'
import Init from './layout/Init'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <Init>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/404' element={<NotFoundError />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  </Init>
  </React.StrictMode>
)
