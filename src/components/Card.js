function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li key={props.id} className="gallery__list-item">
      <button type="button" className="gallery__trash"></button>
      <img src={props.link} className="gallery__image" onClick={handleClick} alt={props.name} />
      <div className="gallery__container">
        <h2 className="gallery__image-title">{props.name}</h2>
        <div className="gallery__like-container">
          <button type="button" className="gallery__like"></button>
          <p className="gallery__like-counter">{props.likesLength}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;