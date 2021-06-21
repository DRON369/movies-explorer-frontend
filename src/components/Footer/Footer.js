import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      <ul className="footer__links">
          <li className="footer__link-item">
            <a className="footer__link" href="http://localhost:3000">Яндекс.Практикум</a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="http://localhost:3000">GitHub</a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="http://localhost:3000">Mail</a>
          </li>

        </ul>
    </footer>
  );
}

export default Footer;
