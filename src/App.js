import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'
import axios from 'axios'

import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Context } from './Context/Context'

const App = () => {

  return (
    <>
      <Context>
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/update' element={<Update />} />
        </Routes>
      </Context>
    </>
  )
}

export default App
