import { useEffect, useState } from "react";

import api from '../utils/Api';
import Card from './Card';
import Loading from './Loading'

function Main(props) {

    const [userName, setUserName] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const [cardsArray, setCardsArray] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([{ name, about, avatar }, cards]) => {
                setUserName(name);
                setUserInfo(about);
                setUserAvatar(avatar);
                setCardsArray(cards);

                setIsLoading(false);
            })
    }, [])

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    {
                        isLoading
                            ? <Loading />
                            : <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
                    }
                    <div className="profile__avatar-overlay"></div>
                </div>

                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__description">{userInfo}</p>
                    <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Изменить"></button>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Добавить"></button>
            </section>

            <section className="places">
                <ul className="places__table">
                    {cardsArray.map((card) =>
                        <Card card={card} key={card._id} onCardClick={props.onCardClick}></Card>
                    )}

                </ul>
            </section>
        </main>
    )
}

export default Main;