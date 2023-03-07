import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/victor-pinheiro-dev/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        <a href="https://github.com/reivictor-dev" target="_blank" rel="noreferrer"><AiFillGithub/></a>

    </div>
  )
}

export default HeaderSocials