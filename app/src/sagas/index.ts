import { call, put } from 'redux-saga/effects'
import { actions } from '../redux/actions'
import { getCurrancyRate } from '../commonFiles/api'
import usersData from '../commonFiles/mockUsers.json'

function* rootSaga() {
    yield call(saga)
}

export { rootSaga }

function* saga(): any {
    // cant get access (404 error) 
    // const users = yield call(getUsers)
    const users = usersData // mock data
    const currencyRateData = yield call(getCurrancyRate)
    
    yield put(actions.setCurrentUser({ ...users[0] }))
    yield put(actions.setCurrencyRate({ ...currencyRateData.Valute }))
}