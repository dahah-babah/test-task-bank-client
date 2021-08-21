import { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

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

const routes = [{
    path: '/', Component: Home
}, {
    path: '/cards', Component: CardsList
}]

const BankMainPage: FC = () => {
    const { isLoading } = useTypedSelector(state => state.mainReducer)
    const animation = { duration: 300, classNames: 'page' } 

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Router>
            {routes.map(({ path, Component }) => 
                <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            key={path} 
                            in={match != null} 
                            timeout={animation.duration} 
                            classNames={animation.classNames}
                            unmountOnExit
                        >
                            <div className={animation.classNames}>
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            )}
        </Router>
    )
}

export default BankMainPage