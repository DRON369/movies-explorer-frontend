import React from 'react';

function Portfolio() {
  return (
    <article className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a href ="http://localhost:3000/" className="portfolio__link">Статичный сайт<div className="portfolio__link-arrow"></div></a>
          </li>
          <li className="portfolio__link-item">
            <a href ="http://localhost:3000/" className="portfolio__link">Адаптивный сайт<div className="portfolio__link-arrow"></div></a>
          </li>
          <li className="portfolio__link-item">
            <a href ="http://localhost:3000/" className="portfolio__link">Одностраничное приложение<div className="portfolio__link-arrow"></div></a>
          </li>
        </ul>
      </nav>
    </article>
  );
}

export default Portfolio;
