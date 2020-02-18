import apiExpress from '../api_express/api';

const GET_STATISTIC = 'GET_STATISTIC';

let initialState = {
name: null,
statisticClicks: [],
statisticViews: [],
statisticDate: []
};

const chartsReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATISTIC: {
         
            let newState = {
                name: action.data.name,
                statisticClicks: action.data.statisticClicks,
                statisticViews: action.data.statisticViews,
                statisticDate: action.data.statisticDate           
                };
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