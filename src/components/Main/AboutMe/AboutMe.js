import React from 'react';
import Avatar from '../../../images/about-me_avatar.jpg'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__information">
        <p className="about-me__name">Андрей</p>
        <img className="about-me__avatar" src={Avatar} alt="Фото Андрея"></img>
        <p className="about-me__profession">Фронтенд-разработчик, 29 лет</p>
        <p className="about-me__details">Привет, мир! Меня зовут Андрей, я начинающий веб-разработчик. Данная страница является моей дипломной работой. Пожалуйста, <a className="about-me__link" href="https://movies.dron369.ru/signup">зарегистрируйтесь</a> и авторизуйтесь, что бы опробовать весь функционал. А так же, ниже, можно найти ссылки на другие мои работы. Надеюсь, вам будет интересно :)</p>
        <ul className="about-me__links">
          <li className="about-me__link-item">
            <a className="about-me__link" target="_blank" rel="noreferrer" href="mailto:dron369@ya.ru">Mail</a>
          </li>
          <li className="about-me__link-item">
            <a className="about-me__link" target="_blank" rel="noreferrer" href="https://github.com/DRON369">GitHub</a>
          </li>
          <li className="about-me__link-item">
            <a className="about-me__link" target="_blank" rel="noreferrer" href="https://linkedin.com/DRON369">LinkedIn</a>
          </li>
          <li className="about-me__link-item">
            <a className="about-me__link" target="_blank" rel="noreferrer" href="https://t.me/dron_369">Telegram</a>
          </li>
        </ul>

      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
