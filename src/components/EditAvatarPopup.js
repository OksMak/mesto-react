import React, { useEffect, useRef } from 'react';
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
  const avatarRef = useRef();
 
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    })
  }

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen])

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input 
        ref={avatarRef}
        id="avatar-link-input" 
        type="url" 
        name="avatarLink" 
        placeholder="Ссылка на аватар" 
        required 
        className="popup__input popup__input_type_avatar-link" 
      />
      <span className="popup__input-error avatar-link-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;