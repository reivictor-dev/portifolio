import React from 'react'
import './about.css'
import ME from '../../assets/me-bg-green.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>


        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Nothing Experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>Nothing Experience</small>
            </article>

            <article className='about_card'>
              <AiFillFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>Nothing Experience</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae excepturi iure officia ducimus, animi voluptas assumenda eligendi libero ad delectus suscipit, ipsam vero quos, esse optio itaque repudiandae autem non?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About