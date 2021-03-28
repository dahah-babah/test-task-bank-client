import React, { ReactChild } from 'react'
import { connect } from 'react-redux'
import { HistoryContainer, HistoryTitle, HistoryList, HistoryItem, OperationTitle, OperationMoney } from './styles'
import UserData from '../commonFiles/mockUsers.json'
import { getCurrency, getCurrencyRateToRuble, getCurrencySign, getCurrencyStr } from '../commonFiles/api'
import Apple from '../commonFiles/images/history/apple.png'
import Dropbox from '../commonFiles/images/history/dropbox.png'
import Facebook from '../commonFiles/images/history/facebook.png'
import Netflix from '../commonFiles/images/history/netflix.png'
import Tesla from '../commonFiles/images/history/tesla.png'

class History extends React.Component<any, any> {
    getUserHistory = (cardType: string) => {
        const userData =  UserData.find(user => user.type === cardType)

        if (userData) {
            return userData.transaction_history
        } else {
            return null
        }
    }

    getHistoryImage = (value: string) => {
        switch(value) {
            case 'apple': return Apple
            case 'dropbox': return Dropbox
            case 'facebook': return Facebook
            case 'netflix': return Netflix
            case 'tesla': return Tesla

            default: return Apple
        }
    }

    render(): ReactChild {  
        const { currentUser, selectedCurrancy, currencyRate } = this.props.mainReducer
        const transaction_history = this.getUserHistory(currentUser.type)    

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
                                            <img src={this.getHistoryImage(operation.title.toLowerCase())}/>
                                            <OperationTitle>
                                                <div>{operation.title}</div>
                                                <div>{operation.date}</div>
                                            </OperationTitle>
                                        </div>
                                        <OperationMoney style={{ alignItems: 'flex-end' }}>
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
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(History)