import { IUser } from "../../types"
import { Action, ActionTypes } from "../../types/actionTypes"

export const actions = {
    setCurrentUser(value: IUser): Action {
        return {
            type: ActionTypes.SET_CURRENT_USER,
            payload: value
        }
    },

    setCurrencyRate(value: any): Action {
        return {
            type: ActionTypes.SET_CURRENCY_RATE,
            payload: value
        }
    },

    setSelectedCurrency(value: string): Action {
        return {
            type: ActionTypes.SET_SELECTED_CURRENCY,
            payload: value
        }
    },
}