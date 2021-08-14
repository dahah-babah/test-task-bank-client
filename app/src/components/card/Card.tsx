import React, { FC } from 'react'

import Balance from './balance/Balance'
import CardHeader from './header/CardHeader'
import CardHolder from './user/CardHolder'

import { CardStyle } from './styles'

const Card: FC = () => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault()
        // this.props.dispatch(actions.setPage({ page: 1 }))
    }

    return (
        <CardStyle onClick={handleClick}>
            <CardHeader />
            <CardHolder />
            <Balance />
        </CardStyle>
    )
}

export default Card