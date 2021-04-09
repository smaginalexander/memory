import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header(props) {
    // передаем в хедер location.pathname
    return (
        <header className="header">
            {/* устанавиваем классы в зависимости от роута */}
            <div className={props.location.pathname === '/' ? "cats-active cats_type_all" : 'cats cats_type_all'}>
                <Link
                    to="/"
                    className={props.location.pathname === '/' ? "header__link-active" : 'header__link'}>Все котики</Link>
            </div>
            <div className={props.location.pathname === '/saved-cats' ? "cats-active cats_type_saved" : 'cats cats_type_saved'}>
                <Link to="/saved-cats" className={props.location.pathname === '/saved-cats' ? "header__link-active" : 'header__link'}>Любимые котики</Link>
            </div>
        </header>
    );
}

export default Header;