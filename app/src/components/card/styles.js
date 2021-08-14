import styled from 'styled-components'

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