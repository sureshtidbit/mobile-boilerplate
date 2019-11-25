import { put, takeLatest, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { getUserInfo } from './index'
function* fetchNews(params) {
    console.log('params==>>>', params)
    try {
        const json = yield getUserInfo()
        console.log('json', json)
        yield put({ type: "CURRENT_USER", payload: json, });
        yield put({ type: "LOADER_STOP", payload: true });
    }
    catch (error) {
        console.log('error====>>>', error, error.response)
        yield put({ type: "LOADER_STOP", payload: true });
        yield put(NavigationActions.navigate({ routeName: 'IsLoggedIn' }))
    }
}
function* userInfo() {
    yield takeLatest('LOADER_START', fetchNews)
}
export default function* rootSaga() {
    yield all([
        userInfo(),
    ]);
}