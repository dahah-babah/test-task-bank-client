import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index'
import { rootSaga } from '../../sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, compose(applyMiddleware(logger), applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)