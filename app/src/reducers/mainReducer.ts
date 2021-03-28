import { constants } from '../commonFiles/constants'
import { defaultState } from '../commonFiles/defaultState'

export const mainReducer = (state = defaultState, { payload, type }) => {    
    switch(type) {

        case constants.SET_CURRENT_USER: 
            return { ...state, currentUser: payload }
        case constants.SET_CURRENCY_RATE: 
            return { ...state, currencyRate: payload }
        case constants.SET_SELECTED_CURRENCY: 
            return { ...state, selectedCurrancy: payload.selectedCurrancy }
        case constants.SET_PAGE: 
            return { ...state, page: payload.page }
        
        default: return state
    }
}