import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './charts.module.css';
import { NavLink } from 'react-router-dom';
import Diagram from './diagram/diagram';

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
            <h2>Clicks</h2>
            <Diagram />
            <h2>Vievs</h2>
            <Diagram />
            
        </div>
        <Footer />
    </div>
};

export default Charts;