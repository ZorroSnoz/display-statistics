import React from 'react';
import s from './stats.module.css';
import { NavLink } from 'react-router-dom';
import green_arrow from '../../images/stats/arrow-green.png';
import blue_arrow from '../../images/stats/arrow-blue.png';
import Header from '../header/header';
import Footer from '../footer/footer';
import Preloader from '../preloader/preloader';

let Stats = ({ statsItems }) => {


    return <div className={s.container} >
        <Header />
        <div className={s.content}>
            <div className={s.navigation}>
                <NavLink to='/'>Main page</NavLink>
                <p>></p>
                <NavLink className={s.current_page} to='/stats'>User satistics</NavLink>
            </div>
            <h1>Users statistics</h1>
            {statsItems.length === 0
                ? <Preloader />
                : <div className={s.users_table_container}>
                    <table>
                        <tr className={s.header_table}>
                            <td className={s.id}>Id</td>
                            <td >First name</td>
                            <td >Last name</td>
                            <td >Email</td>
                            <td className={s.text_align_center}>Gender</td>
                            <td className={s.text_align_center}>IP address</td>
                            <td className={s.text_align_center}>Total clicks</td>
                            <td className={`${s.total_views} ${s.text_align_center}`}>Total page views</td>
                        </tr>
                        {statsItems}
                    </table>
                </div>}

            <div className={s.pagination}>
                <div><img alt='Greeb arrow' src={green_arrow} /></div>
                <p className={s.active_page}>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <div><img alt='Blue arrow' src={blue_arrow} /></div>
            </div>
        </div>
        <Footer />
    </div>
};


export default Stats;