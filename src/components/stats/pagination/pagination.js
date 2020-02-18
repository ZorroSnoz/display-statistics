import React from "react";
import green_arrow from '../../../images/stats/arrow-green.png';
import blue_arrow from '../../../images/stats/arrow-blue.png';
import s from './pagination.module.css';

let Pagination = ({ changeSubmit, paginationPage, totalPageNumber, currentPage }) => {
    return <div className={s.pagination}>
        {currentPage === 1
            ? <div><img alt='Greeb arrow' src={green_arrow} /></div>
            : <div onClick={()=>{changeSubmit(currentPage-1)}} ><img className={s.inverseArrow} alt='Blue arrow' src={blue_arrow} /></div>}
        {paginationPage}
        {currentPage === totalPageNumber
            ? <div><img className={s.inverseArrow} alt='Greeb arrow' src={green_arrow} /></div>
            : <div onClick={()=>{changeSubmit(currentPage+1)}}><img alt='Blue arrow' src={blue_arrow} /></div>}
    </div>

};

export default Pagination;
