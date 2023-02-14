import { takeLatest, put } from 'redux-saga/effects'
import {
  fetchingFormAction,
  fetchingForm,
  postFormAction,
  postForm,
} from '../../reducers/form'

function* loadFormSaga(action: { payload: string }) {
  yield put(fetchingForm(action.payload))
}

function* postFromSaga(action: {
  payload: { formData: string; formName: string }
}) {
  yield put(postForm(action.payload.formData, action.payload.formName))
}

export default function* rootFormSaga() {
  yield takeLatest(fetchingFormAction, loadFormSaga)
  yield takeLatest(postFormAction, postFromSaga)
}
