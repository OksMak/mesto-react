import React, { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfileInfo()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then(card => {
        setCards(card);
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__container">
          <div onClick={props.onEditAvatar} className="profile__avatar-container">
            <img src={userAvatar} className="profile__avatar" alt="аватар" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__button-edit"></button>
            <p className="profile__speciality">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__button-add"></button>
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className="gallery__list">
          {cards.map((cardItem) => (
            <Card
              onCardClick={props.onCardClick}
              card={cardItem}
              name={cardItem.name}
              key={cardItem._id}
              link={cardItem.link}
              likesLength={cardItem.likes.length}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;