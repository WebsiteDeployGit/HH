import React from 'react'
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import Login from '../Login';
import About from '../About';
import ContactUs from '../ContactUs';
import Gallery from '../Gallery';
import Signup from '../Signup';
import Hero from '../Hero/Hero';

const home = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}
export default home;