import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3> 
        <h2>Creating tomorrow's leader today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel ipsum semper pellentesque. Sed vel libero vel ipsum semper pellentesque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel ipsum semper pellentesque. Sed vel libero vel ipsum semper pellentesque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel ipsum semper pellentesque. Sed vel libero vel ipsum semper pellentesque.</p>
      </div>
    </div>
  )
}

export default About
