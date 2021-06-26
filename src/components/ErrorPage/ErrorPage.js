import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page__error-code">404</div>
      <div className="error-page__error-message">Страница не найдена</div>
      <Link to="/" className="error-page__link">Назад</Link>
    </div>
  );
}

export default ErrorPage;
