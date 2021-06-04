import React, { useEffect } from 'react';
import './Header.css';
function Header({ victory, setTable, reset }) {
    const [go, setGo] = React.useState(null);
    const [sec, setSec] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);

    function start() {
        let timer = 0;
        let min = 0;
        setGo(setInterval(() => {
            if (timer < 59) {
                timer++
                setSec(timer)
            } else if (timer = 60) {
                min++
                timer = 0
                setSec(0)
                setMinutes(min)
            }
        }, 1000))
    }

    function stop() {
        setGo(clearInterval(go))
    }


    useEffect(() => {
        let time = `${minutes}:${sec}`
        stop();
        if (victory) {
            setTable(time)
        }
    }, [victory])

    return (
        <header className="header">
            <button onClick={start}>start</button>
            {victory ? <span>{minutes}:{sec}</span> : <span className="victory">{minutes}:{sec}</span>}
            <button onClick={reset}>reset table</button>
        </header>
    );
}

export default Header;