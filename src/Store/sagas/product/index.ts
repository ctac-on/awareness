import { takeLatest, put } from 'redux-saga/effects'
import { requestProduct, startFetchingProduct } from '../../reducers'

function* loadSaga(action: { payload: { id: string; type?: string } }) {
  const { id, type } = action.payload

  yield put(requestProduct(id, type))
}

export default function* rootProductSaga() {
  yield takeLatest(startFetchingProduct, loadSaga)
}
