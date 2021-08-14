import { FC } from 'react'
import { Link } from 'react-router-dom'

import Balance from './balance/Balance'
import CardHeader from './header/CardHeader'
import CardHolder from './user/CardHolder'

import { CardStyle } from './styles'

const Card: FC = () => {
    return (
        <Link to={'/cards'} style={{ textDecoration: 'none' }}>
            <CardStyle>
                <CardHeader />
                <CardHolder />
                <Balance />
            </CardStyle>
        </Link>
    )
}

export default Card