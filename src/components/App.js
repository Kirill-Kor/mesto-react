import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage'

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);

  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="container">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} />
      {isEditAvatarPopupOpen && <PopupWithForm
        name="new-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input id="avatar-link-input" name="link" className="edit-form__field edit-form__field_type_avatar-link"
          type="URL" value="" placeholder="Ссылка на аватар" onChange={() => { }} required />
        <span className="edit-form__field-error avatar-link-input-error"></span>
      </PopupWithForm>}

      {isEditProfilePopupOpen && <PopupWithForm
        name="info-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input id="name-input" name="name" className="edit-form__field edit-form__field_type_name" type="text"
          value="" placeholder="Ваше имя" minLength="2" maxLength="40" onChange={() => { }} required />
        <span className="edit-form__field-error name-input-error"></span>
        <input id="description-input" name="about"
          className="edit-form__field edit-form__field_type_description" type="text" value=""
          placeholder="Профессия" minLength="2" maxLength="200" onChange={() => { }} required />
        <span className="edit-form__field-error description-input-error"></span>
      </PopupWithForm>}

      {isAddPlacePopupOpen && <PopupWithForm
        name="add-post"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input id="place-name-input" name="name" className="edit-form__field edit-form__field_type_place-name"
          type="text" value="" placeholder="Название" minLength="2" maxLength="30" onChange={() => { }} required />
        <span className="edit-form__field-error place-name-input-error"></span>
        <input id="place-link-input" name="link" className="edit-form__field edit-form__field_type_place-link"
          type="URL" value="" placeholder="Ссылка на картинку" onChange={() => { }} required />
        <span className="edit-form__field-error place-link-input-error"></span>
      </PopupWithForm>}

      <PopupWithImage
        card={selectedCard}
        onClose={closeAllPopups}>

      </PopupWithImage>

      <Footer />

    </div>
  );
}

export default App;
