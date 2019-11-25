import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import MySagaRoot from '../Saga/saga'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { rootReducer } from '../Reducers/index'; // the value from combineReducers

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
const sagaMiddleware = createSagaMiddleware()
const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(MySagaRoot)
export const persistor = persistStore(store);