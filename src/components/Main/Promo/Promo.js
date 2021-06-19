import React from 'react';
import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__description">
        <h1 className="promo__title">Учебный проект студента факультета<br/>Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот<br/> проект и его создателя.</p>
        <Link to="/" className="promo__link">Узнать больше</Link>
      </div>
      <div className="promo__logo"></div>
    </section>
  );
}

export default Promo;
