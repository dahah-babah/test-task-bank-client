import { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { CardHolderConatiner, UserContainer, UserIcon, UserName, ExpiredDateContainer, ExpiredDateTitle, ExpiredDate } from './styles'
import UserLogo from '../../../commonFiles/images/userIcon.svg'

const CardHolder: FC = () => {
    const currentUser = useTypedSelector(state => state.mainReducer.currentUser)

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

export default CardHolder