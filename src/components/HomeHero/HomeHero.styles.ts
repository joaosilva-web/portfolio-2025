import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const HomeHeroContainer = styled.div`
height: calc(100vh - 5rem); //view port height minus Header height
margin-top: 5rem; //margin top to space the header height
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const wheel = keyframes`
100% {
    opacity: 0;
    top: 27px;
}
`

export const WrapperText = styled(motion.div)`
    position: relative;
    overflow: hidden;
`

export const Heading = styled(motion.h1)`
    color: ${props => props.theme.primaryText};
    font-size: 4rem;
    font-weight: 900;
    text-align: center;
`

export const Paragraph = styled(motion.p)`
    color: ${props => props.theme.secondaryText};
    font-size: 1.5rem;
    text-align: center;
    max-width: 1000px;

    margin: 2rem 0 4rem 0;
`

export const Mouse = styled.div`
    width: 25px;
    height: 40px;
    border: 2px solid ${props => props.theme.white};
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transform: translateY(calc(18vh));

    &&::before {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.white};
    border-radius: 50%;
    opacity: 1;
    animation: ${wheel} 1.3s infinite;
    -webkit-animation: ${wheel} 1.3s infinite;
    }
`

export const Button = styled(motion.button)`
    cursor: pointer;
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
    padding: 1rem;
    border-radius: 8px;
`

export const SocialMedias = styled.ul`
    position: absolute;
    transform: translateY(-50%);
    left: 0;

    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;

    background-color: ${props => props.theme.primaryText};
    border-radius: 8px;

    li {
        position: relative;
        a{
            text-decoration: none;
            color: ${props => props.theme.backGroundColor};
            font-size: 1.5rem;
        }
    }

    li:hover > span{
        visibility: visible;
    }

    
`

export const Tooltip = styled.span`
    visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
`