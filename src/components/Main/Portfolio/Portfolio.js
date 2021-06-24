import React from 'react';

function Portfolio() {
  return (
    <article className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a href ="https://dron369.github.io/how-to-learn/" className="portfolio__link" target="_blank" rel="noreferrer">Статичный сайт<div className="portfolio__link-arrow"></div></a>
          </li>
          <li className="portfolio__link-item">
            <a href ="https://dron369.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noreferrer">Адаптивный сайт<div className="portfolio__link-arrow"></div></a>
          </li>
          <li className="portfolio__link-item">
            <a href ="https://mesto369.nomoredomains.icu/" className="portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение<div className="portfolio__link-arrow"></div></a>
          </li>
        </ul>
      </nav>
    </article>
  );
}

export default Portfolio;
