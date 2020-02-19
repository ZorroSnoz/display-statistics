import apiExpress from '../api_express/api';

let takeIndexDate = (dateDiapazon, date) => {

    let DateIndex = null;
    for (let i = 0; i < dateDiapazon.length; i++) {
        if (date === dateDiapazon[i]) {
            DateIndex = i;
        }
    }
    return DateIndex;
};

const GET_STATISTIC = 'GET_STATISTIC';
const CHANGE_FROM_DATE = 'CHANGE_FROM_DATE';
const CHANGE_BEFORE_DATE = 'CHANGE_BEFORE_DATE';

let initialState = {
    name: null,
    statisticClicks: [],
    statisticViews: [],
    statisticDate: [],
    dateDiapazon: [],
    fromDate: null,
    fromDateIndex: null,
    beforeDate: null,
    beforeDateIndex: null
};

const chartsReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATISTIC: {

            let newState = {
                ...state,
                name: action.data.name,
                statisticClicks: action.data.statisticClicks,
                statisticViews: action.data.statisticViews,
                statisticDate: action.data.statisticDate,
                dateDiapazon: action.data.dateDiapazon,
            };
            return newState;
        }
        case CHANGE_FROM_DATE: {
            let fromDateIndex = takeIndexDate(state.dateDiapazon, action.date);
            let newState = { ...state, fromDate: action.date, fromDateIndex };

            return newState;
        }
        case CHANGE_BEFORE_DATE: {
            let beforeDateIndex = takeIndexDate(state.dateDiapazon, action.date);
            let newState = { ...state, beforeDate: action.date, beforeDateIndex };

            return newState;
        }
        default: {
            return state;
        }
    }

};

export let changeFromDate = (date) => ({ type: CHANGE_FROM_DATE, date });
export let changeBeforeDate = (date) => ({ type: CHANGE_BEFORE_DATE, date });

let getStatistic = (data) => ({ type: GET_STATISTIC, data });

export let getStatisticThunk = (userId, from = 0, before = 7) => {

    return (dispatch) => {
        apiExpress.getUser(userId, from, before).then(response => {
            dispatch(getStatistic(response.data))
        })
    }
}

export default chartsReduser;