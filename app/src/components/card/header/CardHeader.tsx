import { FC } from 'react'
import { getCardImage } from '../../../utils/cardUtil'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { CardHeaderConatiner, CardHeaderLogo, CardNumber } from './styles'

const CardHeader: FC = () => {    
    const currentUser = useTypedSelector(state => state.mainReducer.currentUser)

    return (
        <CardHeaderConatiner>
            <CardHeaderLogo src={getCardImage(currentUser.type)}/>
            <CardNumber>{currentUser.card_number}</CardNumber>
        </CardHeaderConatiner>
    )
}

export default CardHeader