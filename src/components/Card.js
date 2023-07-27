import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, link, name, likesLength, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((item) => item._id === currentUser._id);
  
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteCard() {
    onCardDelete(card);
  }

  return (
    <>
      {isOwn && <button onClick={handleDeleteCard} type="button" className="gallery__trash" />}
      <img src={link} className="gallery__image" onClick={handleClick} alt={name} />
      <div className="gallery__container">
        <h2 className="gallery__image-title">{name}</h2>
        <div className="gallery__like-container">
          <button onClick={handleLikeClick} type="button" className={`gallery__like ${isLiked ? 'gallery__like_active' : ''}`} />
          <p className="gallery__like-counter">{likesLength}</p>
        </div>
      </div>
    </>
  )
}

export default Card;