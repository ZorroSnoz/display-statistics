import apiExpress from '../api_express/api';

const GET_STATISTIC = 'GET_STATISTIC';

let initialState = {
    first_name: null,
    last_name: null,
statistic: []
};

const chartsReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATISTIC: {
         
            let newState = {
                statistic: action.data.statistic,
                first_name: action.data.user.first_name,
                last_name: action.data.user.last_name,
                user: action.data.user
                }
                console.log(newState)
            return newState;
        }
        default: {
            return state;
        }
    }

};


let getStatistic = (data) => ({type: GET_STATISTIC, data});

export let getStatisticThunk = (userId, from = 0, before = 7) => {
    
    return (dispatch) => {
        apiExpress.getUser(userId, from, before).then(response => {
            dispatch(getStatistic(response.data))
        })
    }
}

export default chartsReduser;