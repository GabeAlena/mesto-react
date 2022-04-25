import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupwithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({isOpen : false});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    
    function handleCardClick(card) {
        card.isOpen = true;
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({isOpen : false});
    }

    return (
      <>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />

        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} textButton="Сохранить">
            <fieldset className="popup__info">
                <input
                    className="popup__input popup__input_type_avatar"
                    required
                    type="url"
                    id="avatar-input"
                    placeholder="Ссылка на аватар" 
                    name="avatar"
                />
                <span className="avatar-input-error popup__input-error">Введите ссылку на аватар.</span>
            </fieldset>
        </PopupWithForm>

        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} textButton="Сохранить">
            <fieldset className="popup__info">
                <input
                    className="popup__input popup__input_type_name"
                    placeholder="Имя"
                    required
                    minLength="2"
                    maxLength="40"
                    id="name-input"
                    type="text" 
                    name="name"
                />
                <span className="name-input-error popup__input-error">Вы пропустили это поле.</span>
                <input
                    className="popup__input popup__input_type_job"
                    placeholder="Профессиональная деятельность"
                    required
                    minLength="2"
                    maxLength="200"
                    id="job-input"
                    type="text" 
                    name="job"
                />
                <span className="job-input-error popup__input-error">Вы пропустили это поле.</span>
            </fieldset>
        </PopupWithForm>

        <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} textButton="Создать">
            <fieldset className="popup__info">
                <input
                    className="popup__input popup__input_type_nameimage" 
                    required
                    minLength="2"
                    maxLength="30"
                    id="mesto-input"
                    type="text" 
                    placeholder="Название"
                    name="name"
                />
                <span className="mesto-input-error popup__input-error">Вы пропустили это поле.</span>
                <input
                    className="popup__input popup__input_type_image"
                    required
                    type="url"
                    id="url-input"
                    placeholder="Ссылка на картинку" 
                    name="image"
                />
                <span className="job-input-error popup__input-error">Вы пропустили это поле.</span>
            </fieldset>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

        <PopupWithForm name="delete-card" title="Вы уверены?" textButton="Да"></PopupWithForm>
      </>    
    );
}    

export default App;