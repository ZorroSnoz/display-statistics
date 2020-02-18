import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './charts.module.css';
import { NavLink } from 'react-router-dom';
import Diagram from './diagram/diagram';
import { getStatisticThunk } from '../../redux/charts-reduser';

let Charts = ({ getStatisticThunk, chartsData }) => {

    useEffect(() => {
        getStatisticThunk(document.location.pathname.slice(6));
    }, []);




    return <div className={s.container}>
        <Header />
        <div className={s.content}>
            <div className={s.navigation}>
                <NavLink to='/'>Main page</NavLink>
                <p>></p>
                <NavLink to='/stats'>User satistics</NavLink>
                <p>></p>
                <p className={s.current_page}>{chartsData.name}</p>
            </div>
            <h1>{chartsData.name}</h1>
            <h2>Clicks</h2>
            <Diagram
                statistic={chartsData.statisticClicks}
                statisticDate={chartsData.statisticDate}
            />
            <h2>Views</h2>
            <Diagram
                statistic={chartsData.statisticViews}
                statisticDate={chartsData.statisticDate}
            />

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