import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { CardsItem, CardsList, CardIcon, CardTitle, Dot } from './styles'
import UsersData from '../commonFiles/mockUsers.json'
import { getCardImage } from '../commonFiles/api'
import { actions } from '../actions'

class Cards extends React.Component<any, any> {
    handleClick = (cardType: string) => {
        const newCurrentUser = UsersData.find(user => user.type === cardType)

        this.props.dispatch(actions.setCurrentUser({ ...newCurrentUser }))        
        this.props.dispatch(actions.setPage({ page: 0 }))        
    }

    render(): ReactNode {  
        const users = UsersData
        const { currentUser } = this.props.mainReducer

        console.log(users);       

        if (users != null) {
            return (
                <CardsList>
                    {
                        users.map((user, index) => {
                            const visibility = currentUser.type === user.type ? 'visible' : 'hidden'

                            return (
                                <CardsItem key={index} onClick={() => this.handleClick(user.type)}>
                                    <CardIcon src={getCardImage(user.type)}/>
                                    <CardTitle>{user.card_number}</CardTitle>
                                    <Dot visibility={visibility}/>
                                </CardsItem>
                            )
                        })
                    }
                </CardsList>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(Cards)