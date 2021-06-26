import React from 'react';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__logo"></div>
      <div className="promo__description">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот
          <span> проект и его создателя.</span></p>
        <a href="#about-project" className="promo__link">Узнать больше</a>
      </div>

    </section>
  );
}

export default Promo;
