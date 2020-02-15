import React from 'react';
import s from './header.module.css';
import { NavLink } from 'react-router-dom';

let Header = (props) => {
    return <div className={s.header} >
        <NavLink to='/'>AppCo</NavLink>
    </div>
};

export default Header;