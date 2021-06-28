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

  registration() {
    return fetch(`${this._address}/signup`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
  }

  authorization() {
    return fetch(`${this._address}/signin`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
  }

  updateUserInfo() {
    return fetch(`${this._address}/users/me`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
  }

  addMovieToSaved() {
    return fetch(`${this._address}/movies`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        }
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
  address: "https://api.movies369.nomoredomains.icu/",
});

export default mainApi;
