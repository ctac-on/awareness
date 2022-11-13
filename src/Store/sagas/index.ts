import { all, spawn, call } from 'redux-saga/effects'

import rootAppSaga from './app'
import rootSagaTree from './tree'

export default function* rootSaga() {
  const sagas = [rootAppSaga, rootSagaTree]

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
