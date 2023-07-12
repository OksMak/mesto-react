import React, { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getServerData()
      .then((data) => {
        const [userInfo, initialCards] = data;
        
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
  }, [])

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__container">
          <div onClick={onEditAvatar} className="profile__avatar-container">
            <img src={userAvatar} className="profile__avatar" alt="аватар" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} type="button" className="profile__button-edit"></button>
            <p className="profile__speciality">{userDescription}</p>
          </div>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__button-add"></button>
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className="gallery__list">
          {cards.map((cardItem) => (
            <li key={cardItem._id} className="gallery__list-item">
              <Card
                onCardClick={onCardClick}
                card={cardItem}
                name={cardItem.name}
                link={cardItem.link}
                likesLength={cardItem.likes.length}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;