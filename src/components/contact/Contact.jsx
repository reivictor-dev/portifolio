import React from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_avaoq5y', 'template_7fdino4', form.current, 'QGzeuelTphAsVyP2R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>reivictor.dev@gmail.com</h5>
            <a href="mailto:reivictor.dev@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Click below</h5>
            <a href="https://api.whatsapp.com/send?phone=5521998590774" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name="email" placeholder='Your Email'  required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact