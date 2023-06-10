import React from 'react'
import './portfolio.css'
import gameExemplePic from '../../assets/pics-exemples/game-pic-exemple.png'
import appDespPersonal from '../../assets/pics-exemples/app-desp-personal-exemple.png';
import nodeExemple from '../../assets/pics-exemples/node-exemple.png'
import agendaExemple from '../../assets/pics-exemples/agenda-exemple.png'

const data = [
  {
    id: 1,
    image: gameExemplePic,
    title: 'Simple Game with Vanilla Js',
    github: 'https://gamawithjsvnl.netlify.app/inicio.html'
  },
  {
    id: 2,
    image: appDespPersonal,
    title: 'Title Project',
    github: 'https://organizationapp.netlify.app'
  },
  {
    id: 3,
    image: nodeExemple,
    title: 'Apirest with NODE.JS',
    github: 'https://github.com/reivictor-dev/apirestnode'
  },
  {
    id: 4,
    image: agendaExemple,
    title: 'A project with MongoDB Atlas and EJS',
    github: 'https://github.com/reivictor-dev/Project-agenda'
  },

]
const Portfolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">

                  <a href={github} className='btn' target='_blank' rel="noreferrer">LINK</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio