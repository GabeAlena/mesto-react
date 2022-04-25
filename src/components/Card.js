import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <section className="elements">
            <article className="element">
                <div className="element__trash-image">
                    <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
                    <button className="element__trash" type="button" aria-label="значок удаления карточки"></button>
                </div>
                <div className="element__title-like">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="element__like-numberLike">
                        <button className="element__like" type="button" aria-label="кнопка мне нравится"></button>
                        <span className="element__numberLike">{props.card.likes.length}</span>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Card;