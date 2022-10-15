import { takeLatest, put, putResolve } from 'redux-saga/effects'
import {
  startFetchingMenu,
  requestMenu,
  startFetchingRecommended,
  requestRecommended,
  requestRecommendedItem,
} from '../../reducers'
import TypeDataRecommended from '../../../Models/TypeDataRecommended'

function* loadMenu() {
  yield put(requestMenu())
}

function* loadRecommended() {
  const { data }: { data: TypeDataRecommended } = yield putResolve(
    requestRecommended(),
  )
  if (data?.nodeById?.fieldTovar?.length) {
    yield put(requestRecommendedItem(data.nodeById.fieldTovar))
  }
}

export default function* rootAppSaga() {
  yield takeLatest(startFetchingMenu, loadMenu)
  yield takeLatest(startFetchingRecommended, loadRecommended)
}
