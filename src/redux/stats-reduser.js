import apiExpress from '../api_express/api';

const ADD_USERS = 'ADD_USERS';

let initialState = {
    usersData: [],
    totalPageNumber: null,
    currentPage: 1,
    totalUsersNamber: 16,
    allUsersNumber: 0,
    paginationArr: null
};

const statsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS: {
            let totalPageNumber = Math.ceil(action.data.allUsersNumber / state.totalUsersNamber)
            let newState = {
                ...state, 
                usersData: [...action.data.usersData], 
                totalPageNumber,
                allUsersNumber: action.data.allUsersNumber}
            return newState;
        }
        default: {
            return state;
        }
    }

};

let getUsers = (data) => ({ type: ADD_USERS, data });

export let getUsersThunk = (totalUsersNamber, currentPage) => {
    
    return (dispatch) => {
        apiExpress.getUsers(totalUsersNamber, currentPage).then(response => {
            dispatch(getUsers(response.data))
        })
    }
}

export default statsReduser;