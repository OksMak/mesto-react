function Card({ card, name, link, likesLength, onCardClick}) {
  
  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <button type="button" className="gallery__trash"></button>
      <img src={link} className="gallery__image" onClick={handleClick} alt={name} />
      <div className="gallery__container">
        <h2 className="gallery__image-title">{name}</h2>
        <div className="gallery__like-container">
          <button type="button" className="gallery__like"></button>
          <p className="gallery__like-counter">{likesLength}</p>
        </div>
      </div>
    </>
  )
}

export default Card;