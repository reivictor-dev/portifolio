import React from 'react'
import './about.css'
import ME from '../../assets/me-bg-green.png'
import { FaAward } from 'react-icons/fa'
//import { FiUsers } from 'react-icons/fi'
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
              <small>Two post-graduate degrees in information technology, a lot courses started and projects finished.</small>
            </article>
{/*}
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small></small>
            </article>
  {*/}
            <article className='about_card'>
              <AiFillFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>Nothing Experience</small>
            </article>
          </div>

          <p>I'm Victor, I have a bachelor's degree in physical education and two post-graduate degrees in information technology, I've always had a passion for this, for example, before I started college in physical education I was already coding something. 
          </p>
          <p>
            Now I think I have some experience to get a job and pick up a lot of experience with more experienced programmers, I believe that will be the best thing that can happen at this time.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About