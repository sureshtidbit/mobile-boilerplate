import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authReducer from './reducer'
export const rootReducer = combineReducers({
    authReducer: authReducer
});