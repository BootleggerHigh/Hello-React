import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
// В зависимости от значения login(true,false) в шапке будет имя пользователя или гость
const Header = (props) => {
    return (<header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        <div className={s.loginBlock}>
            {`Добро пожаловать, ${!props.login ? 'гость' : props.login}`} {props.isAuth ?
            <button onClick={props.LogOut}>Выйти</button> :
            <NavLink to={'/Login'}>Login</NavLink>}
        </div>
    </header>)
};

export default Header;