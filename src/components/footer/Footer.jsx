/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>VICTOR</a>

      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href="#"><FaFacebookF/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Victor Pinheiro. All rights reserviced.</small>
      </div>
    </footer>
  )
}

export default Footer