class MoviesApi {
    constructor(options) {
      // this._headers = options.headers;
      this._url = options.baseUrl;
      // this._authorization = options.headers.authorization;
    }
  
    _checkResponse(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    }

    getMovies() {
        return fetch (this._url, {
            method: "GET",
            headers: {
                'Content-Type' : "application/json",
            }
        })
        .then(this._checkResponse)
      }
  }
  
  const apiMovies = new MoviesApi({
    // baseUrl: "https://api.karina.nomoredomainsicu.ru",
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  });
  
  
  export default apiMovies;