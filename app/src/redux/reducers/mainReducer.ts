import { constants } from '../../commonFiles/constants'
import { defaultState } from '../../commonFiles/defaultState'

export const mainReducer = (state = defaultState, action: any) => {    
    switch(action.type) {

        case constants.SET_CURRENT_USER: 
            return { ...state, currentUser: action.payload }
        case constants.SET_CURRENCY_RATE: 
            return { ...state, currencyRate: action.payload }
        case constants.SET_SELECTED_CURRENCY: 
            return { ...state, selectedCurrancy: action.payload.selectedCurrancy }
        case constants.SET_PAGE: 
            return { ...state, page: action.payload.page }
        
        default: return state
    }
}