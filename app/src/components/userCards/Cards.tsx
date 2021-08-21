import { FC } from 'react'
import { CardsItem, CardsList, CardIcon, CardTitle, Dot } from './styles'
import UsersData from '../../commonFiles/mockUsers.json'
import { getCardImage } from '../../utils/cardUtil'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

const Cards: FC = () => {
    const users = UsersData
    const currentUser = useTypedSelector(state => state.mainReducer.currentUser)
    const { setCurrentUser } = useActions()

    const handleClick = (cardType: string) => {
        const newCurrentUser = UsersData.find(user => user.type === cardType)

        setCurrentUser(newCurrentUser || currentUser)
    }

    if (users != null) {
        return (
            <CardsList>
                {
                    users.map((user, index) => {
                        const scale = currentUser?.type === user.type ? 1 : 0

                        return (
                            <CardsItem key={index} onClick={() => handleClick(user.type)}>
                                <CardIcon src={getCardImage(user.type)}/>
                                <CardTitle>{user.card_number}</CardTitle>
                                <Dot scale={scale}/>
                            </CardsItem>
                        )
                    })
                }
            </CardsList>
        )
    } else {
        return <div>Users List is Empty :^(</div>
    }
}

export default Cards