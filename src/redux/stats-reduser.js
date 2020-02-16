const ADD_USERS = 'ADD_USERS';

let initialState = {
    usersData: [],
    totalPage: null
};

const statsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS: {
            return {
                ...state,
                myAdsData: action.adData,
                adAddLoad: true
            };
        }
        default: {
            return state;
        }
    }

};

// let getUsers = (adsData) => ({ type: GET_MY_ADS, adsData });

// export let getUsersThunk = (userId) => {
//     return (dispatch) => {
//         apiExpress.getAds(userId).then(response => {
//             dispatch(getAds(response.data))
//         })
//     }
// }

export default statsReduser;