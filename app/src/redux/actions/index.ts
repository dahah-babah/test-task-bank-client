import { constants } from "../../commonFiles/constants"

export const actions = {
    setCurrentUser(value: any) {
        return {
            type: constants.SET_CURRENT_USER,
            payload: value
        }
    },

    setCurrencyRate(value: any) {
        return {
            type: constants.SET_CURRENCY_RATE,
            payload: value
        }
    },

    setSelectedCurrency(value: any) {
        return {
            type: constants.SET_SELECTED_CURRENCY,
            payload: value
        }
    },

    setPage(value: any) {
        return {
            type: constants.SET_PAGE,
            payload: value
        }
    }
}