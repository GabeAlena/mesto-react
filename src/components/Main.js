import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
          .then((response) => {
            setUserName(response.name);
            setUserDescription(response.about);
            setUserAvatar(response.avatar);
        })
          .catch((err) => {
            console.log(`Ошибка : ${err}`);
          });

        api.getInitialCards()
          .then((res) => {
              setCards(res);
          })
          .catch((err) => {
            console.log(`Ошибка : ${err}`);
          });
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-avatar-button">
                    <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button" aria-label="кнопка изменить аватар"></button>
                    <img className="profile__avatar" src={userAvatar} alt="аватар" />
                </div>
                <div className="profile__info">
                    <div className="profile__inform">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" onClick={props.onEditProfile} type="button"
                            aria-label="кнопка изменить данные пользователя"></button>
                    </div>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="кнопка добавить фото"></button>
            </section>

            <section className="elements-container">
                {cards.map((card, id) => (
                    <Card key={id} card={card} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    )
}

export default Main;