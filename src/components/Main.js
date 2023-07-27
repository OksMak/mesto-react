import React, { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__container">
          <div onClick={onEditAvatar} className="profile__avatar-container">
            <img src={currentUser.avatar} className="profile__avatar" alt="аватар" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button onClick={onEditProfile} type="button" className="profile__button-edit"></button>
            <p className="profile__speciality">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__button-add"></button>
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className="gallery__list">
          {cards.map((card) => (
            <li key={card._id} className="gallery__list-item">
              <Card
                card={card}
                link={card.link}
                name={card.name}
                likesLength={card.likes.length}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;