import PopupWithForm from "./PopupWithForm.js";

function WarningPopup({ isOpen, onClose, onDeleteCard, card }) {

  function handleSubmit(e) {
    e.preventDefault();

    onDeleteCard(card);
  }

  return(
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="warning"
      title="Вы уверены?"
      buttonText="Да"
      onSubmit={handleSubmit}
    />
  )
}

export default WarningPopup;