import apiExpress from '../api_express/api';

const ADD_USERS = 'ADD_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';

let initialState = {
    usersData: [],
    currentPage: 1,
    totalUsersNamber: 16,
    paginationArr: [],
    totalPageNumber: null
};

const statsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS: {
            let totalPageNumber = Math.ceil(action.data.allUsersNumber / state.totalUsersNamber)
            let paginationSection = totalPageNumber / 5;
            let paginationArr = [];
            let pageNumber = 1;

             for (let i = 0; i < paginationSection; i++) {
                paginationArr.push([]);
                 for (let a = 0; a < 5; a++) {
                    paginationArr[i].push(pageNumber);
                    if (pageNumber === totalPageNumber) {
                        break;
                    }
                    pageNumber++;
                 }
             }

            let newState = {
                ...state, 
                usersData: [...action.data.usersData], 
                totalPageNumber,
                paginationArr: [...paginationArr]}
            return newState;
        }
        case CHANGE_PAGE: {
            let newState = {
                ...state, 
                currentPage: action.page
                }
            return newState;
        }
        default: {
            return state;
        }
    }

};

export let changePage = (page) => ({ type: CHANGE_PAGE, page });

let getUsers = (data) => ({ type: ADD_USERS, data });

export let getUsersThunk = (totalUsersNamber, currentPage) => {
    
    return (dispatch) => {
        apiExpress.getUsers(totalUsersNamber, currentPage).then(response => {
            dispatch(getUsers(response.data))
        })
    }
}

export default statsReduser;