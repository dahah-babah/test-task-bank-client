import { constants } from "../commonFiles/constants"

export const actions = {
    setCurrentUser(value) {
        return {
            type: constants.SET_CURRENT_USER,
            payload: value
        }
    },

    setCurrencyRate(value) {
        return {
            type: constants.SET_CURRENCY_RATE,
            payload: value
        }
    },

    setSelectedCurrency(value) {
        return {
            type: constants.SET_SELECTED_CURRENCY,
            payload: value
        }
    },

    setPage(value) {
        return {
            type: constants.SET_PAGE,
            payload: value
        }
    }
}