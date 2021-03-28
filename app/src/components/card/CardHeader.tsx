import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { getCardImage } from '../../commonFiles/api'
import { CardHeaderConatiner, CardHeaderLogo, CardNumber } from '../styles'

class CardHeader extends React.Component<any, any> {    render(): ReactNode {        
        const currentUser = this.props.mainReducer.currentUser

        return (
            <CardHeaderConatiner>
                <CardHeaderLogo src={getCardImage(currentUser.type)}/>
                <CardNumber>{currentUser.card_number}</CardNumber>
            </CardHeaderConatiner>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(CardHeader)