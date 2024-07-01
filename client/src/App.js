import Navbar from "./Components/Navbar/navbar"
import './App.css';
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";
import Testimonial from "./Components/Testimonials/Testimonial";
import Login from "./Components/Login";
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Gallery from "./Components/Gallery";
import Signup from "./Components/Signup";

function App() {
  return (
  
    <> 
        <Navbar/>
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
     <Footer/>
    </>
   
    
  );
}

export default App;
