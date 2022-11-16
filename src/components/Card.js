export default function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="card" onClick = {handleClick}>
            <img className="card__image"
                src={card.link}
                alt={card.name} />
            <div className="card__content">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button className="card__like-button" type="button" aria-label="Нравится"></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
                <button className="card__delete-button" type="button" aria-label="Удалить"></button>
            </div>
        </li>
    )
}