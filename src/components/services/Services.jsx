import React from 'react'
import './services.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <article className='service'>
          <div className="service_head none">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list none'>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*End UI UX*/}


      
        <article className='service'>
          <div className="service_head">
            <h3>Web development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Frontend Vanilla JS and React.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Backend with NODE.js</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Databases SQL and NoSQL.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>MariaDB, MongoDB and MySQL</p>
            </li>
          </ul>

          
        </article>
        {/*Web Dev*/}
      

     
        <article className='service'>
          <div className="service_head none">
            <h3>Content creation</h3>
          </div>

          <ul className='service_list none'>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*End UI UX*/}

        </div>
    </section>
  )
}

export default Services