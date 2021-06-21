import React from 'react';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
      <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
      <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      <div className="about-project__timeline">
        <div className="about-project__timeline-item about-project__timeline-item_color_green">1 неделя</div>
        <div className="about-project__timeline-item">4 недели</div>
        <p className="about-project__timeline-description">Back-end</p>
        <p className="about-project__timeline-description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
