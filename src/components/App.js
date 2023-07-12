import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
    setIsImagePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        name="edit-profile" 
        title="Редактировать профиль" 
        children={
        <>
          <input id="name-input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" className="popup__input popup__input_type_name" />
          <span className="popup__input-error name-input-error"></span>
          <input id="profession-input" type="text" name="profession" placeholder="Профессия" required minLength="2" maxLength="200" className="popup__input popup__input_type_profession" />
          <span className="popup__input-error profession-input-error"></span>
        </>
        }
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        />
      <PopupWithForm
        name="add-cards"
        title="Новое место"
        children={
          <>
            <input id="title-input" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" className="popup__input popup__input_type_title" />
            <span className="popup__input-error title-input-error"></span>
            <input id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required className="popup__input popup__input_type_link" />
            <span className="popup__input-error link-input-error"></span>
          </>
        }
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup 
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="warning"
        title="Вы уверены?"
        buttonText="Да"
      />
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        children={
          <>
            <input id="avatar-link-input" type="url" name="avatarLink" placeholder="Ссылка на аватар" required className="popup__input popup__input_type_avatar-link" />
            <span className="popup__input-error avatar-link-input-error"></span>
          </>
        }
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
