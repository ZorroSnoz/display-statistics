import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './charts.module.css';
import { NavLink } from 'react-router-dom';
import Diagram from './diagram/diagram';
import { getStatisticThunk } from '../../redux/charts-reduser';

let Charts = ({getStatisticThunk}) => {

    let userId = document.location.pathname.slice(6)

    useEffect(() => {
        getStatisticThunk(userId);
    }, []);

    
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

let mapStateToProps = (state) => {
    return {
        chartsData: state.chartsPage
    }
};


export default connect(mapStateToProps, { getStatisticThunk })(Charts);