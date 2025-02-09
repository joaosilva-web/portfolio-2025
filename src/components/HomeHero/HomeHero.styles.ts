import styled, { keyframes } from "styled-components";

export const HomeHeroContainer = styled.div`
height: calc(100vh - 5rem); //view port height minus Header height

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
    color: ${props => props.theme.primaryText};
    font-size: 5rem;
    font-weight: 900;
    text-align: center;
}

p {
    color: ${props => props.theme.secondaryText};
    font-size: 2rem;
    text-align: center;
    max-width: 1200px;

    margin: 2rem 0 4rem 0;
}
`

const wheel = keyframes`
100% {
    opacity: 0;
    top: 27px;
}
`

export const Mouse = styled.div`
    width: 25px;
    height: 40px;
    border: 2px solid ${props => props.theme.primaryText};
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transform: translateY(calc(15vh));

    &&::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: ${wheel} 1.3s infinite;
    -webkit-animation: ${wheel} 1.3s infinite;
    }
`