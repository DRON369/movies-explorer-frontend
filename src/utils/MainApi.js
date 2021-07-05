class MainApi {
  constructor({ address }) {
    this._address = address;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  registration({ name, email, password }) {
    return fetch(`${this._address}/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      })
      .then(this._checkResponse);
  }

  authorization(email, password) {
    return fetch(`${this._address}/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      .then(this._checkResponse);
  }

  getUserInfo(jwt) {
    return fetch(`${this._address}/users/me`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
  }

  updateUserInfo(name, email) {
    return fetch(`${this._address}/users/me`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      })
      .then(this._checkResponse);
  }

  addMovieToSaved({ country, director, duration, year, description, image, trailerLink, thumbnail, movieId, title, nameEN }) {
    return fetch(`${this._address}/movies`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country: country,
          director: director,
          duration: duration,
          year: year,
          description: description,
          image: image,
          trailer: trailerLink,
          thumbnail: thumbnail,
          movieId: movieId,
          nameRU: title,
          nameEN: nameEN
        })
      })
      .then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._address}/movies`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
  }

  removeMovieFromSaved(movieId) {
    return fetch(`${this._address}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
  }

}

const mainApi = new MainApi({
  address: "https://api.movies369.nomoredomains.icu",
});

export default mainApi;
