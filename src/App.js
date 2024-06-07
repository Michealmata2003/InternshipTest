import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Routes/Dashboard';
import Tickets from './Routes/Tickets';
import Login from './Routes/Login';
import './index.css';



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<Login />} />
          {/* <Route path="/tickets" element={<Tickets />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
