function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`} aria-label="Модальное окно">
        <div className={`popup__container popup__container_type_${props.name}`}>
          <button onClick={props.onClose} type="button" className="popup__close"></button>
          <h2 className="popup__title">{props.title}</h2>
          <form action="#" method="post" name={`${props.name}-form`} className="popup__form" noValidate>
            {props.children}
            <button type="submit" className="popup__button">{props.buttonText}</button>
          </form>
        </div>
      </section>
  )
}

export default PopupWithForm;