import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { handleRequests } from '@redux-requests/core'
import { createDriver } from '@redux-requests/graphql'

import rootSaga from './sagas'
import app from './reducers'

const sagaMiddleware = createSagaMiddleware({})

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: {
    default: createDriver({ url: 'https://backend.lab-v.ru/BACKEND/graphql' }),
  },
})

const middleware = [...requestsMiddleware, sagaMiddleware]
const rootReducers = combineReducers({
  app,
  requests: requestsReducer,
})


const store = configureStore({
  reducer: rootReducers,
  middleware,
})

sagaMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
