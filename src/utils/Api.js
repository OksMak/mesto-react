class Api {
  constructor({ baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleCheck(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(endPoint, options) {
    return fetch(`${this._baseUrl}/${endPoint}`, options)
      .then((res) => this._handleCheck(res));
  }


  getProfileInfo() {
    return this._request('users/me', {
      headers: this._headers
    })
  }

  getInitialCards() {
    return this._request('cards', {
      headers: this._headers
    })
  }

  removeLike(cardId) {
    return this._request(`cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  editAvatar(data) {
    return this._request('users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
  }

  editProfileInfo(data) {
    return this._request('users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
  }

  addLike(cardId) {
    return this._request(`cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
  }

  changeLikeCardStatus(id, isLiked) {
    this._status = isLiked ? this.addLike(id) : this.removeLike(id);
    return this._status;
}

  addNewCard(data) {
    return this._request('cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
  }

  removeCard(cardId) {
    return this._request(`cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'e8803ec9-a123-4a64-8ea6-17d84f0d5aa3',
    'Content-Type': 'application/json'
  }
});