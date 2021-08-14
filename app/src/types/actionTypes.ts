import { IUser } from "./index";

export type Action = 
    SetCurrentUserAction 
    | SetCurrencyRateAction
    | SetSelectedCurrencyAction

export enum ActionTypes {
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    SET_CURRENCY_RATE = 'SET_CURRENCY_RATE',
    SET_SELECTED_CURRENCY = 'SET_SELECTED_CURRENCY',
}

interface SetCurrentUserAction {
    type: ActionTypes.SET_CURRENT_USER,
    payload: IUser
}

interface SetCurrencyRateAction {
    type: ActionTypes.SET_CURRENCY_RATE,
    payload: any
}

interface SetSelectedCurrencyAction {
    type: ActionTypes.SET_SELECTED_CURRENCY,
    payload: string
}