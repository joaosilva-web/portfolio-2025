import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
    height: 5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0px;
    z-index: 999;

    padding: 1rem 5rem;

    background: rgba( 245, 247, 254, 0.90 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 4px );
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