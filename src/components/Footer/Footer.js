import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      <ul className="footer__links">
          <li className="footer__link-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/DRON369/">GitHub</a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" target="_blank" rel="noreferrer" href="mailto:dron369@ya.ru">Mail</a>
          </li>

        </ul>
    </footer>
  );
}

export default Footer;
