import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import statsReduser from './stats-reduser';

let redusers = combineReducers(
    {
        statsPage: statsReduser
    });

    const store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;