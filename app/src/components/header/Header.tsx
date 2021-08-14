import { FC } from 'react'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import arrow from '../../commonFiles/images/arrow.svg'
import { HeaderStyle, BackArrow } from './styles'

const Header: FC = () => {
    const handleClick = () => {
        // this.props.dispatch(actions.setPage({ page: 0 }))
    }

    const { page } = useTypedSelector(state => state.mainReducer)
    const pageName = page === 0 ? 'Главная' : 'Мои карты'

    if (page === 0) {
        return (
            <HeaderStyle>{pageName}</HeaderStyle>
        )        
    } else {
        return (
            <HeaderStyle>
                <div style={{ display: 'flex', alignItems: 'center', width: '336px' }}>
                    <BackArrow src={arrow} onClick={handleClick}/>
                    <div>
                        {pageName}
                    </div>
                </div>
            </HeaderStyle>
        )  
    }
}

export default Header