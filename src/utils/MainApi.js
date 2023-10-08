class ApiMain {
    constructor(options) {
      // this._headers = options.headers;
      this._url = options.baseUrl;
      // this._authorization = options.headers.authorization;
    }
  
    _getResponseData(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}  ${res.statusText}`);
      
    }

    auth(nameUser, email, password ) {
      return fetch (`${this._url}/signup`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json" 
          },
          
          body: JSON.stringify({
              name: nameUser,
              email: email,
              password: password,
          }),
      })
      .then(this._getResponseData);
    }
  
  //   запрос для авторизации в нашем сервисе
    authorization(password, email) {
      return fetch (`${this._url}/signin`, {
          method: "POST",
          headers: {
              'Content-Type' : "application/json"
          },
          body: JSON.stringify({
              password: password,
              email: email,
          })
      })
      .then(this._getResponseData)
    }
  
    getUser(token) {
      return (
        fetch(`${this._url}/users/me`, {
          headers: {
            // 'Content-Type' : "applicatio/json",
              "Authorization" : `Bearer ${token}`
          },
        })
          /*then значит дождись выполнения предыдущей строчки и что-то сделай с аргументом res*/
          .then(this._getResponseData)
      );
    }

    setUserInfo(username, email, token) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          'Content-Type' : "application/json",
              "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({
          name: username,
          email: email,
        }),
      }).then(this._getResponseData);
    }
  
    getMovies(token) {
      /* заправшиваем данные с указанного сервера с помощью fetch */
      return fetch(`${this._url}/movies`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        },
      }).then(this._getResponseData);
    }
  
//   добавляем НОВЫЙ фильм
    setNewMovie(data, token) {
      return fetch(`${this._url}/movies`, {
        method: "POST",
        headers: {
          'Content-Type' : "application/json",
          "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            description: data.description,
            year: data.year,
            image: `https://api.nomoreparties.co/${data.image.url}`,
            trailerLink: data.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
        }),
      }).then(this._getResponseData);
    }
  
    deleteMovies(movieId, token) {
      return fetch(`${this._url}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            "Authorization" : `Bearer ${token}`
        },
      }).then(this._getResponseData);
    }

  }
  
  const apiMain = new ApiMain({
    // baseUrl: "https://api.karina.nomoredomainsicu.ru",
    baseUrl: "https://api.karinasav.diplom.nomoredomainsicu.ru",
  });
  
  
  export default apiMain;