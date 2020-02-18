import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import statsReduser from './stats-reduser';
import chartsReduser from './charts-reduser';

let redusers = combineReducers(
    {
        statsPage: statsReduser,
        chartsPage: chartsReduser
    });

    const store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;