import React from 'react';
import Card from '../Card/Card';
import SavedCard from '../SavedCard/SavedCard';
import './Main.css';

function Main(props) {
    return (
        <main className="elements">
            {/* вывод всех котов и избранных в зависимости от роута */}
            {props.location.pathname === '/' ?
                props.catCards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        setSavedCat={props.setSavedCat}
                    />
                )) :
                props.savedCatCards.map((card) => (
                    <SavedCard
                        key={card._id}
                        card={card}
                        deleteSavedCat={props.deleteSavedCat}
                    />
                ))
            }
        </main>
    )
}

export default Main;