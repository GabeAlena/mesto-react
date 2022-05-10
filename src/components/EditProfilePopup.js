import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupwithForm';

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description
        });
    }

    return (
        <PopupWithForm 
            name="profile" 
            title="Редактировать профиль" 
            isOpen={props.isOpen} 
            onClose={props.onClose}
            onSubmit={handleSubmit}
            textButton="Сохранить"
        >
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
                    value={name || ''}
                    onChange={handleChangeName}
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
                    value={description || ''}
                    onChange={handleChangeDescription}
                />
                <span className="job-input-error popup__input-error">Вы пропустили это поле.</span>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditProfilePopup;