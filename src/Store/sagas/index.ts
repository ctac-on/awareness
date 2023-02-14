import { all, spawn, call } from 'redux-saga/effects'

import rootAppSaga from './app'
import rootSagaTree from './tree'
import rootProductSaga from './product'
import rootFormSaga from './form'

export default function* rootSaga() {
  const sagas = [rootAppSaga, rootSagaTree, rootProductSaga, rootFormSaga]

  yield all(
    sagas.map((saga) => {
      return spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    }),
  )
}
