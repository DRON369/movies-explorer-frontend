class MoviesApi {
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

  getMovies() {
    return fetch(`${this._address}/beatfilm-movies`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  address: "https://api.nomoreparties.co",
});

export default moviesApi;
