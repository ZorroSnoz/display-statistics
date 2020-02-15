import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './charts.module.css';
import { NavLink } from 'react-router-dom';
// import CanvasJS from 'canvasjs';

let Charts = (props) => {
    return <div className={s.container}>
        <Header />
        <div className={s.content}>
            <div className={s.navigation}>
                <NavLink to='/'>Main page</NavLink>
                <p>></p>
                <NavLink to='/stats'>User satistics</NavLink>
                <p>></p>
                <p className={s.current_page}>Samuel Frost</p>
            </div>
            <h1>Samuel Frost</h1>

        </div>
        <Footer />
    </div>
};

export default Charts;