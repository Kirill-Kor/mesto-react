
export default function PopupWithImage({ card, onClose }) {
    if(card)
        return (
            <div className={`popup popup_type_image popup_opened`}>
                <div className="popup__image-container">
                    <img className="popup__image"
                        src={card.link} />
                    <figcaption className="popup__caption"></figcaption>
                    <button className="popup__close-button popup__close-button_place_image" type="button"
                        aria-label="Закрыть" onClick={onClose}></button>
                </div>
            </div>
        )
}