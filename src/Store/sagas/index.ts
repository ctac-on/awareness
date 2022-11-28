import { all, spawn, call } from 'redux-saga/effects'

import rootAppSaga from './app'
import rootSagaTree from './tree'
import rootProductSaga from './product'

export default function* rootSaga() {
  const sagas = [rootAppSaga, rootSagaTree, rootProductSaga]

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
