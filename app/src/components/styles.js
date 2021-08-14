import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.bgColor};
    font-family: 'Roboto', sans-serif;
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