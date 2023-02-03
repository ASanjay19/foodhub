import {createStore, combineReducers} from 'redux';
import FavoriteReducer from './reducers/FavoriteReducer';
import BagReducer from './reducers/BagReducer';

const rootReducer = combineReducers({
    favorite : FavoriteReducer,
    bag : BagReducer
})


export const store = createStore(rootReducer);