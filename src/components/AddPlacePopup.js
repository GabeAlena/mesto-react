import React from 'react';
import PopupWithForm from './PopupwithForm';

function AddPlacePopup(props) {
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    React.useEffect(() => {
        nameRef.current.value = '';
        linkRef.current.value = '';
    });

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value
        });
    }

    return (
        <PopupWithForm 
            name="place" 
            title="Новое место" 
            isOpen={props.isOpen} 
            onClose={props.onClose}
            onSubmit={handleSubmit}
            textButton="Создать"
        >
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
                    ref={nameRef}
                />
                <span className="mesto-input-error popup__input-error">Вы пропустили это поле.</span>
                <input
                    className="popup__input popup__input_type_image"
                    required
                    type="url"
                    id="url-input"
                    placeholder="Ссылка на картинку" 
                    name="image"
                    ref={linkRef}
                />
                <span className="job-input-error popup__input-error">Вы пропустили это поле.</span>
            </fieldset>
        </PopupWithForm>
    )
}

export default AddPlacePopup;