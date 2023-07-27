import React, { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonText	}) {
	const [name, setName] = useState('');
	const [link, setLink] = useState('');

	useEffect(() => {
		setName('');
		setLink('');
	}, [isOpen]);

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleLinkChange(e) {
		setLink(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		onAddPlace({
			name,
			link
		})


	}

  return(
    <PopupWithForm
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      name="add-cards"
      title="Новое место"
			onSubmit={handleSubmit}
    >
      <input 
        id="title-input" 
        type="text" 
        name="name" 
        placeholder="Название" 
        required 
        minLength="2" 
        maxLength="30" 
        className="popup__input popup__input_type_title"
				onChange={handleNameChange}
				value={name}
      />
      <span className="popup__input-error title-input-error"></span>
      <input 
        id="link-input" 
        type="url" 
        name="link" 
        placeholder="Ссылка на картинку" 
        required 
        className="popup__input popup__input_type_link"
				onChange={handleLinkChange}
				value={link}
      />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;