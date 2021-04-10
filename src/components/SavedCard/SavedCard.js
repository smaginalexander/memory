import React from 'react';
import '../Card/Card.css';

function SavedCard(props) {
    const [isLiked, setIsLiked] = React.useState(true);
    //при клике на лайк передадим id карточки в тело запроса
    const likeCat = () => {
        setIsLiked(true)
    }
    const unLikeCat = () => {
        setIsLiked(false)
        props.deleteSavedCat(props.card.id)
    }

    return (
        <div className="card">
            <img className="card__img" src={props.card.image.url} alt="кот" />
            {isLiked ?
                <span onClick={unLikeCat} className="card__like card__like_true" /> :
                <span onClick={likeCat} className="card__like card__like_false" />
            }
        </div>
    )
}

export default SavedCard;