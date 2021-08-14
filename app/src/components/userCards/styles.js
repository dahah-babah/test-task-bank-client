import styled from 'styled-components'

export const CardsList = styled.ul`
    width: 360px;
    list-style: none;
    padding: 0;
    margin: 0;
`

export const CardsItem = styled.li`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    cursor: pointer;
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