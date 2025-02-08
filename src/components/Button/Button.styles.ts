import styled from "styled-components";

export const Button = styled.button`
    padding: 1.5rem 8rem;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 1.5rem;

    border-radius: 8px;
    transition: all .2s ease;

    &&:hover {
        background-color: ${props => props.theme.hover};
        cursor: pointer;
        padding: 1.5rem 8.2rem
    }
`

export const Anchor = styled.a`
    text-decoration: none;
`