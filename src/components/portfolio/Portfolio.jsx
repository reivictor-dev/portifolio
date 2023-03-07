import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Logo.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title Project',
    github: 'https://github.com/reivictor-dev'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Title Project',
    github: 'https://github.com/reivictor-dev'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Title Project',
    github: 'https://github.com/reivictor-dev'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Title Project',
    github: 'https://github.com/reivictor-dev'
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

                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
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