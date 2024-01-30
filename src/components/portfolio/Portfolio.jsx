import React from 'react'
import './portfolio.css'
import gameExamplePic from '../../assets/pics-exemples/game-pic-example.png'
import appDespPersonal from '../../assets/pics-exemples/app-desp-personal-exemple.png';
import nodeExample from '../../assets/pics-exemples/node-example.png'
import agendaExample from '../../assets/pics-exemples/agenda-example.png'
import getapetnode from '../../assets/pics-exemples/getapetnode.png'
import churchwebsite from '../../assets/pics-exemples/church-website-example-django.png'

const data = [
  {
    id: 1,
    image: gameExamplePic,
    title: 'Simple Game with Vanilla Js',
    github: 'https://gamawithjsvnl.netlify.app/inicio.html'
  },
  {
    id: 6,
    image: churchwebsite,
    title: 'A volunteer project for a local church, where church members can connect and interact with themselves(under construction)',
    github: 'https://church-app-production.up.railway.app'
  },
  {
    id: 2,
    image: appDespPersonal,
    title: 'Personal Organization App',
    github: 'https://organizationapp.netlify.app'
  },
  {
    id: 3,
    image: nodeExample,
    title: 'Apirest with NODE.JS',
    github: 'https://github.com/reivictor-dev/apirestnode'
  },
  {
    id: 4,
    image: agendaExample,
    title: 'A project with MongoDB Atlas and EJS',
    github: 'https://github.com/reivictor-dev/Project-agenda'
  },
  {
    id: 5,
    image: getapetnode,
    title: 'A big fullstack project, wich I used the most used current technologies.',
    github: 'https://github.com/reivictor-dev/fullstackProject-getapet'
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