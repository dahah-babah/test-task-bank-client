import React, { ReactChild } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Cards from './Cards'
import CurrencyList from './CurrencyList'
import History from './History'
import Header from './Header'
import { MainContainer, Title} from './styles'

class BankMainPage extends React.Component<any, any> {
    render(): ReactChild {  
        const { currentUser, currencyRate, page } = this.props.mainReducer

        if (currentUser !== null && currencyRate !== null) {
            if (page === 0) {
                return (
                    <MainContainer bgColor={'#F1F3F9'}>
                        <Header/>
                        <Card/>
                        <Title>Change currency</Title>
                        <CurrencyList/>
                        <History />
                    </MainContainer>
                )
            } else {
                return (
                    <MainContainer bgColor={'#FFFFFF'}>
                        <Header/>
                        <Cards />
                    </MainContainer>
                )
            }
        } else {
            return <div>Loading...</div>
        }
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(BankMainPage)