import styled from 'styled-components'

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