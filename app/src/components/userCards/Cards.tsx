import { FC } from 'react'
import { CardsItem, CardsList, CardIcon, CardTitle, Dot } from './styles'
import UsersData from '../../commonFiles/mockUsers.json'
import { getCardImage } from '../../utils/cardUtil'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Cards: FC = () => {
    const handleClick = (cardType: string) => {
        // const newCurrentUser = UsersData.find(user => user.type === cardType)

        // this.props.dispatch(actions.setCurrentUser({ ...newCurrentUser }))        
        // this.props.dispatch(actions.setPage({ page: 0 }))        
    }

    const users = UsersData
    const currentUser = useTypedSelector(state => state.mainReducer.currentUser)

    if (users != null) {
        return (
            <CardsList>
                {
                    users.map((user, index) => {
                        const visibility = currentUser?.type === user.type ? 'visible' : 'hidden'

                        return (
                            <CardsItem key={index} onClick={handleClick(user.type)}>
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

export default Cards