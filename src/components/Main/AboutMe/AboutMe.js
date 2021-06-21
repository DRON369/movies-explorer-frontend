import React from 'react';
import Avatar from '../../../images/about-me_avatar.jpg'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__information">
        <p className="about-me__name">Андрей</p>
        <img className="about-me__avatar" src={Avatar} alt=""></img>
        <p className="about-me__profession">Фронтенд-разработчик, 29 лет</p>
        <p className="about-me__details">Я родился и живу в Заречном, Свердловской области, закончил факультет информатики РГППУ. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <ul className="about-me__links">
          <li className="about-me__link-item">
            <a className="about-me__link" href="http://localhost:3000">Mail</a>
          </li>
          <li className="about-me__link-item">
            <a className="about-me__link" href="http://localhost:3000">GitHub</a>
          </li>
          <li className="about-me__link-item">
            <a className="about-me__link" href="http://localhost:3000">LinkedIn</a>
          </li>
          <li className="about-me__link-item">
            <a className="about-me__link" href="http://localhost:3000">Telegram</a>
          </li>
        </ul>

      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
