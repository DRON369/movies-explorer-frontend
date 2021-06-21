import React from 'react';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__caption">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <a className="techs__link" target="_blank" rel="noreferrer" href="https://www.w3.org/Style/CSS/"><li className="techs__list-item">CSS</li></a>
        <a className="techs__link" target="_blank" rel="noreferrer" href="https://html.spec.whatwg.org/multipage/"><li className="techs__list-item">HTML</li></a>
        <a className="techs__link" target="_blank" rel="noreferrer" href="https://ru.wikipedia.org/wiki/JavaScript"><li className="techs__list-item">JS</li></a>
        <a className="techs__link" target="_blank" rel="noreferrer" href="https://reactjs.org/"><li className="techs__list-item">React</li></a>
        <a className="techs__link" target="_blank" rel="noreferrer" href="https://git-scm.com/"><li className="techs__list-item">Git</li></a>
        <a className="techs__link" target="_blank" rel="noreferrer" href="https://expressjs.com/"><li className="techs__list-item">Express.js</li></a>
        <a className="techs__link" target="_blank" rel="noreferrer" href="https://www.mongodb.com/"><li className="techs__list-item">mongoDB</li></a>
      </ul>
    </section>
  );
}

export default Techs;
