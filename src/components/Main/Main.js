import React from 'react';
import Card from '../Card/Card';
import './Main.css';

function Main({ handleVictory, result }) {
    const arr = [
        {
            text: 1
        }, {
            text: 1
        }, {
            text: 9
        }, {
            text: 9
        }, {
            text: 8
        }, {
            text: 8
        }, {
            text: 7
        }, {
            text: 7
        }, {
            text: 6
        }, {
            text: 6
        }, {
            text: 5
        }, {
            text: 5
        }, {
            text: 4
        }, {
            text: 4
        }, {
            text: 3
        }, {
            text: 3
        }, {
            text: 2
        }, {
            text: 2
        },
        {
            text: 10
        },
        {
            text: 10
        },
        {
            text: 11
        },
        {
            text: 11
        },
        {
            text: 12
        },
        {
            text: 12
        },
        {
            text: 13
        },
        {
            text: 13
        },
        {
            text: 14
        },
        {
            text: 14
        },
        {
            text: 15
        },
        {
            text: 15
        },
        {
            text: 16
        },
        {
            text: 16
        },
        {
            text: 17
        },
        {
            text: 17
        },
        {
            text: 18
        },
        {
            text: 18
        },
    ]
    const sortArr = arr.sort(function () {
        return Math.random() - 0.5;
    });
    return (
        <>
            <main className="content">
                <div className="elements">{
                    sortArr.map((card) => (
                        <Card
                            handleVictory={handleVictory}
                            key={card._id}
                            card={card}
                        />
                    ))}
                </div>
                <div className="results">
                    {result ?
                        result.map((item) => (
                            <div className='content__container'>
                                <span>{item.try === 0 ? 'попытка' : `${item.try}`}</span>
                                <span>{item.res === 0 ? 'время' : `${item.res}`}</span>
                            </div>
                        )) :
                        ''
                    }
                </div>
            </main>
        </>
    )
}

export default Main;