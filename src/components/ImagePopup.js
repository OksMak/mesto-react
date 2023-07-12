function ImagePopup({ card, isOpen, onClose }) {
  return (
    <section className={`popup popup_type_show-image ${isOpen ? "popup_opened" : ""}`} aria-label="Модальное окно">
        <div className="popup__container popup__container_type_show-image">
          <button onClick={onClose} type="button" className="popup__close"></button>
          <figure className="popup__figure">
            <img src={card.link} className="popup__image" alt={card.name} />
            <figcaption className="popup__caption">{card.name}</figcaption>
          </figure>
        </div>
      </section>
  )
}

export default ImagePopup;