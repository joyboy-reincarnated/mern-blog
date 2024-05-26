import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Signup from './pages/Signup'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import FooterCom from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/sign-in'  element={<Signin/>}/>
      <Route path='/sign-up'  element={<Signup/>}/>
      <Route path='/projects'  element={<Projects/>}/>
      <Route path='/dashboard'  element={<Dashboard/>}/>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}
 