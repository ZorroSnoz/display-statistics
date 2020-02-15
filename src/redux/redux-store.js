import { createStore, combineReducers} from 'redux';

let redusers = combineReducers(
    {
    });

const store = createStore(redusers);

window.store = store;
export default store;