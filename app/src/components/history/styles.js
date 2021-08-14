import styled from 'styled-components'

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
    flex-direction: column;
    align-items: flex-end;
    color: #8C9AAE;
    text-align: right;
    font-style: normal;
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.0145455em;

    > div {

        :last-child {
            text-align: right;
            font-style: normal;
            font-size: 14px;
            font-weight: normal;
            line-height: 22px;
            letter-spacing: 0.0145455em;
        }
    }
`