import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subtitle='Our program' title='What we offer'/>
      <Program/>
      <About/>
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='TESTIMONIAL' title='What Student Says'/>
      <Testimonial/>
      <Title subtitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
