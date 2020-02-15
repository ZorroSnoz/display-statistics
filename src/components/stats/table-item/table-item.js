import React from 'react';
import s from '../stats.module.css';

let StatsItem = (props) => {
    return <tr className={s.table_item}>
        <td className={s.text_align_center}>1</td>
        <td >Samuel</td>
        <td >Frost</td>
        <td >sirious.sam@gmail.com</td>
        <td className={s.text_align_center}>male</td>
        <td className={s.text_align_center}>192.168.32.05</td>
        <td className={s.text_align_center}>290 883</td>
        <td className={s.text_align_center}>290 883</td>
    </tr>
};

export default StatsItem;
