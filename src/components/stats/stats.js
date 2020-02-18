import React from 'react';
import s from './stats.module.css';
import { NavLink } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Preloader from '../preloader/preloader';
import PaginationContainer from './pagination/pagination-container';

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
<PaginationContainer />
        </div>
        <Footer />
    </div>
};


export default Stats;