import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 5rem;

    background: ${props => props.theme.backGroundColor};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12.9px);

`

const blink = keyframes`
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
`

export const Logo = styled.a`
    text-decoration: none;
    display: flex;
    gap: .25rem;

    p {
        color: ${props => props.theme.primary};
        font-size: 2rem;
        font-weight: bolder;
    }

    p:last-child {
        animation: ${blink} 1.25s infinite ease-in;
        color: ${props => props.theme.primaryText};
    }


`

export const MenuContainer = styled.nav`
    display: flex;
    gap: 1.25rem;
    list-style: none;

    li {
        a {
            text-decoration: none;

            font-family: "Montserrat";
            font-weight: bold;
            color: ${props => props.theme.primaryText};
        }
    }
    `