import {createStore,combineReducers} from 'redux';

import appReducer from './appReducer';

const rootReducer = combineReducers({
    cities : appReducer
})

const configureStore = ()  =>{
    return createStore(rootReducer);
}

export default configureStore;