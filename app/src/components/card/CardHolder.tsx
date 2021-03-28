import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { CardHolderConatiner, UserContainer, UserIcon, UserName, ExpiredDateContainer, ExpiredDateTitle, ExpiredDate } from '../styles'
import UserLogo from '../../commonFiles/images/userIcon.svg'

class CardHolder extends React.Component<any, any> {
    render(): ReactNode {  
        const currentUser = this.props.mainReducer.currentUser

        return (
            <CardHolderConatiner>
                <UserContainer>
                    <UserIcon src={UserLogo}/>
                    <UserName>{currentUser.cardholder_name}</UserName>
                </UserContainer>
                <ExpiredDateContainer>
                    <ExpiredDateTitle>VALID THRU</ExpiredDateTitle>
                    <ExpiredDate>{currentUser.valid}</ExpiredDate>
                </ExpiredDateContainer>
            </CardHolderConatiner>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(CardHolder)