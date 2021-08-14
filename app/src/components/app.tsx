import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

import Header from './header/Header'
import Card from './card/Card'
import Cards from './userCards/Cards'
import CurrencyList from './currencyList/CurrencyList'
import History from './history/History'

import { MainContainer, Title } from './styles'

const BankMainPage: FC = () => {
    const { currentUser, currencyRate, page } = useTypedSelector(state => state.mainReducer)

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

export default BankMainPage