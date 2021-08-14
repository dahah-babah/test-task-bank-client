import { FC } from 'react'
import { Link } from 'react-router-dom'

import arrow from '../../commonFiles/images/arrow.svg'
import { HeaderStyle, BackArrow } from './styles'

interface HeaderProps {
    homePage?: boolean
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
    if (props.homePage) {
        return (
            <HeaderStyle>{'Главная'}</HeaderStyle>
        )        
    } else {
        return (
            <HeaderStyle>
                <div style={{ display: 'flex', alignItems: 'center', width: '336px' }}>
                    <Link to={'/'}>
                        <BackArrow src={arrow}/>
                    </Link>
                    <div>{'Мои карты'}</div>
                </div>
            </HeaderStyle>
        )  
    }
}

export default Header