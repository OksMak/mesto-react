function PopupWithForm({ name, title, buttonText, isOpen, onClose, onSubmit, children }) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`} aria-label="Модальное окно">
        <div className={`popup__container popup__container_type_${name}`}>
          <button onClick={onClose} type="button" className="popup__close" />
          <h2 className="popup__title">{title}</h2>
          <form 
            action="#" 
            method="post" 
            name={`${name}-form`} 
            className="popup__form"
            onSubmit={onSubmit}
            noValidate
          >
            {children}
            <button type="submit" className="popup__button">{buttonText}</button>
          </form>
        </div>
      </section>
  )
}

export default PopupWithForm;