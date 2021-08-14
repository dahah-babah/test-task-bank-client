import { FC } from 'react'
import { getCurrencyRateToRuble, getCurrencySign, getCurrencyStr, getCurrency } from '../../../utils/currencyUtil'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { BalanceConatiner, CurrencyBalance, BalanceStyle, BalanceTitle, BalanceValue } from './styles'

const Balance: FC = () => {
    const { currentUser, selectedCurrancy, currencyRate } = useTypedSelector(state => state.mainReducer)
    const currencyRateToRuble = getCurrencyRateToRuble(currencyRate, selectedCurrancy.toUpperCase())
    const currency = getCurrency(currencyRate, currencyRateToRuble, currentUser.balance)
    const currencyStr = getCurrencyStr(currency.toString())
    
    return (
        <BalanceConatiner>
            <CurrencyBalance>{`${getCurrencySign(selectedCurrancy.toUpperCase())}${currencyStr}`}</CurrencyBalance>
            <BalanceStyle>
                <BalanceTitle>{'Your balance'}</BalanceTitle>
                <BalanceValue>{`$${currentUser.balance}`}</BalanceValue>
            </BalanceStyle>
        </BalanceConatiner>
    )
}

export default Balance