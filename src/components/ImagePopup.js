function ImagePopup(props) {
  return (
    <section className={`popup popup_type_show-image ${props.isOpen ? "popup_opened" : ""}`} aria-label="Модальное окно">
        <div className="popup__container popup__container_type_show-image">
          <button onClick={props.onClose} type="button" className="popup__close"></button>
          <figure className="popup__figure">
            <img src={props.card.link} className="popup__image" alt={props.card.name} />
            <figcaption className="popup__caption">{props.card.name}</figcaption>
          </figure>
        </div>
      </section>
  )
}

export default ImagePopup;