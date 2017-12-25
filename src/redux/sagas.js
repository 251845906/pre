import { call, put, takeLatest} from 'redux-saga/effects';
import * as apis from '../api/api';
import * as types from './types';
import * as actions from './actions';

function* addSaga({ text }) {
    try {

        // reuslt 接口的返回值
        const result = yield call(apis.changeNumber);
        console.log(result)

        yield put(actions.abc());

    } catch (err) {
        console.log(err);
        yield put(actions.abc());
    }
}

function* jianSaga() {
    try {
        // reuslt 接口的返回值
        const result = yield call(apis.changeNumber);

        yield put(actions.abc());

    } catch (err) {
        yield put(actions.abc());
    }
}

export default function* defaultSaga() {
    yield [
        takeLatest(types.abc, addSaga),
        takeLatest(types.abc, jianSaga),
    ];
}