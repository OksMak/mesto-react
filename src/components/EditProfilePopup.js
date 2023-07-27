import React, { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonText }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile" 
      title="Редактировать профиль" 
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input 
        id="name-input" 
        type="text" 
        name="name" 
        placeholder="Имя" 
        required 
        minLength="2" 
        maxLength="40" 
        className="popup__input popup__input_type_name"
        onChange={handleNameChange}
        value={name || ''}
      />
      <span className="popup__input-error name-input-error"></span>
      <input 
        id="profession-input" 
        type="text" 
        name="profession" 
        placeholder="Профессия" 
        required 
        minLength="2" 
        maxLength="200" 
        className="popup__input popup__input_type_profession"
        onChange={handleDescriptionChange}
        value={description || ''}
      />
      <span className="popup__input-error profession-input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;