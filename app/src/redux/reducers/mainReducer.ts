import { defaultState } from '../../commonFiles/defaultState'
import { Action, ActionTypes } from '../../types/actionTypes'

export const mainReducer = (state = defaultState, action: Action) => {    
    switch(action.type) {
        case ActionTypes.SET_CURRENT_USER: 
            return { ...state, currentUser: action.payload }
        case ActionTypes.SET_CURRENCY_RATE: 
            return { ...state, ...action.payload }
        case ActionTypes.SET_SELECTED_CURRENCY: 
            return { ...state, selectedCurrancy: action.payload }
                    
        default: return state
    }
}