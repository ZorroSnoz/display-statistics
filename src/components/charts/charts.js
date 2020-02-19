import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './charts.module.css';
import { NavLink } from 'react-router-dom';
import Diagram from './diagram/diagram';
import { getStatisticThunk, changeFromDate, changeBeforeDate } from '../../redux/charts-reduser';

let Charts = ({ getStatisticThunk, chartsData, changeFromDate, changeBeforeDate }) => {

    const [beforeData, setData] = useState(0);

    useEffect(() => {
        getStatisticThunk(document.location.pathname.slice(6));
    }, []);

    let putFromDate = (e) => {
        setData(0)
        changeFromDate(e.target.value)
    };

    let putBeforeDate = (e) => {
        setData(0)
        changeBeforeDate(e.target.value)
    };

    let getNewData = () => {

        if (chartsData.fromDateIndex === undefined || chartsData.beforeDateIndex === undefined) {
            setData(1)

        } else if (chartsData.fromDateIndex > chartsData.beforeDateIndex) {
            setData(1)

        } else {
            getStatisticThunk(
                document.location.pathname.slice(6),
                chartsData.fromDateIndex,
                chartsData.beforeDateIndex
            )
        }

    };

    let diapazonFromDate = chartsData.dateDiapazon.map(item => chartsData.fromDate === item ? <option selected>{item}</option> : <option>{item}</option>);
    let diapazonBeforeDate = chartsData.dateDiapazon.map(item => chartsData.beforeDate === item ? <option selected>{item}</option> : <option>{item}</option>);

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
            <div className={s.selectedDiapazonContainer}><h1>{chartsData.name}</h1>
                <div className={s.selectors}>
                    <div>
                        <p>From:</p>
                        <select onChange={(e) => { putFromDate(e) }}>
                            <option disabled selected>select date</option>
                            {diapazonFromDate}
                        </select>
                        <p>Before:</p>
                        <select onChange={(e) => { putBeforeDate(e) }}>
                            <option disabled selected>select date</option>
                            {diapazonBeforeDate}
                        </select>
                    </div>
                    <div>
                        {beforeData === 1
                            ? <span className={s.errorSpan}>Invalid date</span>
                            : <span onClick={getNewData}>Get date</span>}
                    </div>



                </div>

            </div>


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


export default connect(mapStateToProps, { getStatisticThunk, changeFromDate, changeBeforeDate })(Charts);