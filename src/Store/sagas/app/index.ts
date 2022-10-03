import { takeLatest, put } from 'redux-saga/effects'
import { startFetchingMenu, requestMenu } from '../../reducers'

function* loadMenu() {
  yield put(requestMenu())
}

export default function* rootAppSaga() {
  yield takeLatest(startFetchingMenu, loadMenu)
}
