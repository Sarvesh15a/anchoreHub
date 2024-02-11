import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Project from './pages/Project';
import Header from './components/Header';
import FooterCom from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
  
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<About/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/' element={<Signup/>}/>
          <Route path='/list' element={<Project/>}/>
        </Routes>
     
    </BrowserRouter>
  )
}

export default App