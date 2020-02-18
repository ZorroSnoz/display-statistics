import React from "react";
import { connect } from 'react-redux';
import Pagination from "./pagination";
import s from './pagination.module.css';
import { getUsersThunk, changePage} from '../../../redux/stats-reduser';

let PaginationContainer = ({totalPageNumber, paginationArr, currentPage, changePage, getUsersThunk, totalUsersNamber}) => {

let changeSubmit = (page) => {
  changePage(page);
  getUsersThunk(totalUsersNamber, page);
};

let paginationPage = []
if (paginationArr.length !== 0) {
  let  pagination = paginationArr.find(arr2=> arr2.includes(currentPage));

 paginationPage = pagination.map(i => ( currentPage === i ? <p onClick={()=>{changeSubmit(i)}} className={s.active_page}>{i}</p> : <p onClick={()=>{changeSubmit(i)}}>{i}</p>));
}

    return <Pagination totalPageNumber={totalPageNumber} currentPage={currentPage} changeSubmit={changeSubmit}  paginationPage={paginationPage}  />

};

let mapStateToProps = (state) => {
  return {
    currentPage: state.statsPage.currentPage,
    totalUsersNamber: state.statsPage.totalUsersNamber,
    paginationArr: state.statsPage.paginationArr,
    totalPageNumber: state.statsPage.totalPageNumber
  }
};

export default connect(mapStateToProps, { getUsersThunk, changePage })(PaginationContainer);
