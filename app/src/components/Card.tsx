import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { actions } from '../actions'
import Balance from './card/Balance'
import CardHeader from './card/CardHeader'
import CardHolder from './card/CardHolder'
import { CardStyle } from './styles'

type CardState = {

}

class Card extends React.Component<any, CardState> {
    handleClick = (event): void => {
        event.preventDefault()
        this.props.dispatch(actions.setPage({ page: 1 }))
    }

    render(): ReactNode {      
        return (
            <CardStyle onClick={(event) => this.handleClick(event)}>
                <CardHeader />
                <CardHolder />
                <Balance />
            </CardStyle>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(Card)