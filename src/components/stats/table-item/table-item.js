import React, { useState } from 'react';
import s from '../stats.module.css';
import { Redirect } from 'react-router-dom';

let StatsItem = ({ userData }) => {

    let { id, first_name, last_name, email, gender, ip_address, total_page_views, total_clicks } = userData;

    const [click, setClick] = useState(0);

    if (click === 0) {
        return (
            <tr onClick={()=>{setClick(1)}} className={s.table_item}>
           <td className={s.text_align_center}>{id}</td>
           <td >{first_name}</td>
           <td >{last_name}</td>
           <td >{email}</td>
           <td className={s.text_align_center}>{gender}</td>
           <td className={s.text_align_center}>{ip_address}</td>
           <td className={s.text_align_center}>{total_page_views}</td>
           <td className={s.text_align_center}>{total_clicks}</td>
       </tr>)
    } else {
        return <Redirect to={`/user/${id}`} />
    }

    
};

export default StatsItem;
