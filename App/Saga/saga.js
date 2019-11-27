import { put, takeLatest, all } from 'redux-saga/effects';
import { GET, POST } from './service'
import {logout} from './auth'
function* fetchNews(props) {
    console.log('params==>>>', props)
    try {
        const json = yield GET('isLoggedIn')
        if (json.status == 1001) {
            logout(props)
        } else {
            yield put({ type: "CURRENT_USER", payload: json, });
            yield put({ type: "LOADER_STOP", payload: true });
        }
    }
    catch (error) {
        yield put({ type: "LOADER_STOP", payload: true });
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