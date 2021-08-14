import { FC } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './header/Header'
import Card from './card/Card'
import Cards from './userCards/Cards'
import CurrencyList from './currencyList/CurrencyList'
import History from './history/History'

import { MainContainer, Title } from './styles'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Home: FC = () => {
    return (
        <MainContainer bgColor={'#F1F3F9'}>
            <Header homePage/>
            <Card/>
            <Title>Change currency</Title>
            <CurrencyList/>
            <History />
        </MainContainer>
    )
}

const CardsList: FC = () => {
    return (
        <MainContainer bgColor={'#FFFFFF'}>
            <Header/>
            <Cards />
        </MainContainer>
    )
}

const BankMainPage: FC = () => {
    const { isLoading } = useTypedSelector(state => state.mainReducer)

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/cards'} component={CardsList}/>
            </Switch>
        </Router>
    )
}

export default BankMainPage