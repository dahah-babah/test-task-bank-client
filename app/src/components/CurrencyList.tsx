import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { actions } from '../actions'
import { CurrencyListStyle, CurrencyItem, Sign, CurrencyTitle } from './styles'

const currencyList = [{
    value: 'gbp',
    title: 'GBP',
    sign: '£'
},{
    value: 'eur',
    title: 'EUR',
    sign: '€'
},{
    value: 'rub',
    title: 'RUB',
    sign: '₽'
}]

class CurrencyList extends React.Component<any, any> {
    handleClick(value) {
        this.props.dispatch(actions.setSelectedCurrency({ selectedCurrancy: value }))        
    }

    render(): ReactNode {     
        const selectedCurrancy = this.props.mainReducer.selectedCurrancy        
        
        return (
            <CurrencyListStyle>
                {
                    currencyList.map(currency => 
                        {
                            return (
                                <CurrencyItem 
                                    key={currency.value} 
                                    selected={currency.value === selectedCurrancy}
                                    onClick={() => this.handleClick(currency.value)}
                                >
                                    <Sign selected={currency.value === selectedCurrancy}>{currency.sign}</Sign>
                                    <CurrencyTitle selected={currency.value === selectedCurrancy}>{currency.title}</CurrencyTitle>
                                </CurrencyItem>
                            )
                        }
                    )
                }
            </CurrencyListStyle>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(CurrencyList)