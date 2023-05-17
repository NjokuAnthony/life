import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Creat from './pages/Creat'
import Update from './pages/Update'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Creat" element={<Creat />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </Router>
  )
}

export default App