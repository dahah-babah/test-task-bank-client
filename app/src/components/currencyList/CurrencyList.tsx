import { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { currencyList } from './currencyList'
import { CurrencyListStyle, CurrencyItem, Sign, CurrencyTitle } from './styles'

const CurrencyList: FC = () => {
    const handleClick = (value: string) => {
        // this.props.dispatch(actions.setSelectedCurrency({ selectedCurrancy: value }))        
    }

    const selectedCurrancy = useTypedSelector(state => state.mainReducer.selectedCurrancy)      
    
    return (
        <CurrencyListStyle>
            {
                currencyList.map(currency => 
                    {
                        return (
                            <CurrencyItem 
                                key={currency.value} 
                                selected={currency.value === selectedCurrancy}
                                onClick={handleClick(currency.value)}
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

export default CurrencyList