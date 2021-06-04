import React, { useContext, useEffect, useState } from 'react';
import './Card.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Card(props) {
    const [cardCount, setCardCount] = useState(0)
    const currentUser = useContext(CurrentUserContext);


    useEffect(() => {
        const allHiddenCards = document.querySelectorAll('.done')
        if (allHiddenCards.length >= 36) {
            props.handleVictory()
        }
    }, [cardCount])

    function check(e) {
        let matches = 0
        const span = e.target
        const spanList = document.querySelectorAll('.span')
        if (currentUser.text === '') {
            span.classList.add('active')
            setTimeout(() => {
                span.classList.remove('active')
                currentUser.text = '';
            }, 5000)
            currentUser.text = span.textContent
        } else if (currentUser.text === span.textContent && !span.classList.contains('active')) {
            span.classList.add('active')
            const spanMatch = document.querySelectorAll('.active')
            for (var i = 0; i < spanMatch.length; ++i) {
                spanMatch[i].classList.add('done')
            }
            currentUser.text = '';
            matches++
            setCardCount(matches)
            console.log('совпадение');
        } else if (currentUser.text !== span.textContent) {
            span.classList.add('active')
            setTimeout(() => {
                for (var i = 0; i < spanList.length; ++i) {
                    spanList[i].classList.remove('active')
                }
            }, 500)
            currentUser.text = '';
            console.log('не совпало');
        }
    }

    return (
        <div className="card" onClick={check}>
            <span className="span">{props.card.text}</span>
        </div>
    )
}

export default Card;