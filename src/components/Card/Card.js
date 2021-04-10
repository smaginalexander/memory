import React from 'react';
import './Card.css';

function Card(props) {
    const [isLiked, setIsLiked] = React.useState(false);

    //при клике на лайк передадим id карточки в тело запроса
    const likeCat = () => {
        setIsLiked(true)
        props.setSavedCat(props.card.id)
    }
    const unLikeCat = () => {
        setIsLiked(false)
    }

    return (
        <div className="card">
            <img className="card__img" src={props.card.url} alt="кот" />
            {isLiked ?
                <span onClick={unLikeCat} className="card__like card__like_true" /> :
                <span onClick={likeCat} className="card__like card__like_false" />
            }
        </div>
    )
}

export default Card;