import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { getCurrencyRateToRuble, getCurrencySign, getCurrencyStr, getCurrency } from '../../commonFiles/api'
import { BalanceConatiner, CurrencyBalance, BalanceStyle, BalanceTitle, BalanceValue } from '../styles'

class Balance extends React.Component<any, any> {
    render(): ReactNode {    
        const { currentUser, selectedCurrancy, currencyRate } = this.props.mainReducer
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
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(Balance)