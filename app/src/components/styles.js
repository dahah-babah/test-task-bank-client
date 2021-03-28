import styled from 'styled-components'

export const MainContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.bgColor};
    font-family: 'Roboto', sans-serif;
`

export const HeaderStyle = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(139, 164, 187, 0.08);
    height: 60px;
    width: ${props => props.width};
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    /* text */
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #141414;
`

export const CardStyle = styled.div`
    cursor: pointer;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(139, 164, 187, 0.12);
    border-radius: 16px;
    width: 328px;
    height: 225px;
    margin-top: 24px;
    transform-origin: center;
    transition: .2s transform ease-out;

    :hover {
        transform: scale(1.03);
    }
`

export const Title = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.019em;
    color: #141414;
    width: 328px;
    margin: 40px auto 28px auto;
`

export const CurrencyListStyle = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`

export const CurrencyItem = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 100px;
    margin-right: 14px;
    background-color: ${props => props.selected ? '#0083E1' : '#FFFFFF'};
    border-radius: 16px;
    box-shadow: 0px 8px 16px rgba(139, 164, 187, 0.12);
    transform-origin: center;
    transition: .1s transform ease-out;

    :hover {
        transform: scale(1.05);
    }

    :last-child {
        margin-right: 0;
    }
`

export const Sign = styled.div`
    color: ${props => props.selected ? '#FFFFFF' : '#8C9AAE'};
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    margin-top: 17px;
    margin-bottom: 4px;
`

export const CurrencyTitle = styled.div`
    color: ${props => props.selected ? '#FFFFFF' : '#8C9AAE'};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

`

export const CardHeaderConatiner = styled.div`
    width: 100%;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
`

export const CardHeaderLogo = styled.img`
    margin-left: 22px;
`

export const CardNumber = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    color: #141414;
    margin-right: 32px;
`

export const CardHolderConatiner = styled.div`
    width: 100%;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
`

export const UserContainer = styled.div`
    display: flex;
`

export const UserIcon = styled.img`
    margin-left: 22px;

`

export const UserName = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: #8C9AAE;
    align-self: center;
    margin-left: 14px;
    flex: 1 100%;
`

export const ExpiredDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: normal;
    color: #8C9AAE;
    margin-right: 22px;
`

export const ExpiredDateTitle = styled.div`
    font-size: 8px;
    line-height: 16px;
`

export const ExpiredDate = styled.div`
    font-size: 17px;
    line-height: 25px;
`

export const BalanceConatiner = styled.div`
    width: 100%;
    margin-top: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
`

export const CurrencyBalance = styled.div`
    margin-left: 22px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    color: #141414;
`

export const BalanceStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 22px;
`

export const BalanceTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    color: #8C9AAE;
    margin-bottom: 4px;
`

export const BalanceValue = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #141414;
`

export const CardsList = styled.ul`
    width: 360px;
    list-style: none;
    /* margin-top: 60px; */
    padding: 0;
    margin: 0;
`

export const CardsItem = styled.li`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    /* ::after {
        content: '';
        background-color: '#F1F3F9';
        width: 100%;
        height: 1px;
    } */
`

export const CardIcon = styled.img`
    margin-left: 16px;
    margin-right: 15px;
    width: 32px;
`

export const CardTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
`

export const Dot = styled.div`
    background-color: #0083E1;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin-right: 20px;
    margin-left: auto;
    visibility: ${props => props.visibility};
`

export const BackArrow = styled.img`
    z-index: 1;
    width: 9px;
    height: 16px;
    cursor: pointer;
    margin-left: 16px;
    margin-right: 109px;
`

export const HistoryContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(139, 164, 187, 0.12);
    border-radius: 16px;
    width: 328px;
    height: 264px;
    margin-top: 50px;
    margin-bottom: 30px;
`

export const HistoryTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.0241176em;
    margin-top: 20px;
    margin-left: 22px;
`

export const HistoryList = styled.ul`
    margin: 22px 0px 24px 22px;
    padding: 0;
    padding-right: 22px;
    list-style: none;
    height: 184px;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 4px;
        margin-top: 20px;
    }

    ::-webkit-scrollbar-thumb {
        background: #DDE1EC;
    }
`

export const HistoryItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;

    :last-child {
        margin-bottom: 0;
    }

    > div {
        display: flex;
        align-items: center;

        > img {
            border: 1px solid #EAEEF9;
            border-radius: 12px;    
            width: 39px;
            height: 39px;
            padding: 5px;
            margin-right: 17px;
        }
    }
`

export const OperationTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;

    > div {
        :last-child {
            font-style: normal;
            font-weight: normal;
            font-size: 11px;
            line-height: 19px;
            letter-spacing: 0.00636364em;
            color: #8C9AAE;
        }
    }
`

export const OperationMoney = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    text-align: right;
    letter-spacing: 0.0145455em;
    color: #8C9AAE;
    flex-direction: column;

    > div {

        :last-child {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 22px;
            text-align: right;
            letter-spacing: 0.0145455em;
        }
    }
`
