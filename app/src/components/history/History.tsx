import { FC } from 'react'
import { getCurrency, getCurrencyRateToRuble, getCurrencySign, getCurrencyStr } from '../../utils/currencyUtil'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getHistoryImage, getUserHistory } from '../../utils/historyUtil'
import { HistoryContainer, HistoryTitle, HistoryList, HistoryItem, OperationTitle, OperationMoney } from './styles'

const History: FC = () => {
    const { currentUser, selectedCurrancy, currencyRate } = useTypedSelector(state => state.mainReducer)
    const transaction_history = getUserHistory(currentUser!.type)    

    if (transaction_history !== null) {
        return (
            <HistoryContainer>
                <HistoryTitle>History</HistoryTitle>
                <HistoryList>
                    {
                        transaction_history.map((operation, index) => {
                            const currencyRateToRuble = getCurrencyRateToRuble(currencyRate, selectedCurrancy.toUpperCase())
                            const currency = getCurrency(currencyRate, currencyRateToRuble, Number(operation.amount)*(-1))
                            const currencyStr = getCurrencyStr(currency.toString())    

                            return (
                                <HistoryItem key={index}>
                                    <div>
                                        <img src={getHistoryImage(operation.title.toLowerCase())} alt={'history_img'}/>
                                        <OperationTitle>
                                            <div>{operation.title}</div>
                                            <div>{operation.date}</div>
                                        </OperationTitle>
                                    </div>
                                    <OperationMoney>
                                        <div>
                                            <span>{`-`}</span><span>{getCurrencySign(selectedCurrancy.toUpperCase())}</span><span style={{ color: '#141414' }}>{currencyStr}</span>
                                        </div>
                                        <div>{`$${Number(operation.amount)*(-1)}`}</div>
                                    </OperationMoney>
                                </HistoryItem>
                            )
                        })
                    }
                </HistoryList>
            </HistoryContainer>
        )
    } else {
        return <div>Loading...</div>
    }
}

export default History