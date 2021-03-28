import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { actions } from '../actions'
import arrow from '../commonFiles/images/arrow.svg'
import { HeaderStyle, BackArrow } from './styles'

class Header extends React.Component<any, any> {
    handleClick = () => {
        this.props.dispatch(actions.setPage({ page: 0 }))
    }

    render(): ReactNode {
        const { page } = this.props.mainReducer
        const pageName = page === 0 ? 'Главная' : 'Мои карты'

        if (page === 0) {
            return (
                <HeaderStyle justify={'center'} width={'100%'}>{pageName}</HeaderStyle>
            )        
        } else {
            return (
                <HeaderStyle justify={'flex-start'} width={'336px'}>
                    <BackArrow src={arrow} onClick={() => this.handleClick()}/>
                    <div>
                        {pageName}
                    </div>
                </HeaderStyle>
            )  
        }
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(Header)