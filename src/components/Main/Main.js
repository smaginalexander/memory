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
                    <div className="element" key={card._id}>
                        <Card
                            card={card}
                            setSavedCat={props.setSavedCat}
                        />
                    </div>
                )) :
                props.savedCatCards.map((card) => (
                    <div className="element" key={card._id}>
                        <SavedCard
                            card={card}
                            deleteSavedCat={props.deleteSavedCat}
                        />
                    </div>
                ))
            }
        </main>
    )
}

export default Main;