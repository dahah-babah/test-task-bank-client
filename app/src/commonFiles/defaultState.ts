import { IMainState } from "../types";

export const defaultState: IMainState = {
    currentUser: null,
    currencyRate: null,
    selectedCurrancy: 'gbp',
    isLoading: true,
}