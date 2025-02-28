import { motion } from "framer-motion";
import styled from "styled-components";


export const MyProjectsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;

    h2 {
        text-transform: uppercase;
        padding-bottom: 5rem;
    }
`

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    place-items: center;
    gap: 2rem;
`

export const ProjectCard = styled(motion.div)`
    position: relative;
    overflow: hidden;
    background-color: ${({theme}) => theme.white};
    border-radius: 16px;
    width: 400px;
    height: 250px;

    img {
        width: 100%;
        transition: all 0.25s ease-in-out;
    }

    &:hover img {
    transform: scale(1.1);
}
`

export const ProjectCardContent = styled(motion.div)`
top: 0;
left: 0;
position: absolute;
transition: opacity 0.3s ease-in-out;
opacity: 0;
display: none;
background-color: rgba(29, 38, 94, 0.75);
backdrop-filter: blur(4px);
border-radius: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: 0.5rem;
height: 100%;

h2, p, a {
    padding: 0;
    color: ${({theme}) => theme.white};
}
`

export const ProjectCardLinks = styled(motion.div)`
    display: flex;
    gap: 1rem;

    font-size: 1.5rem;
`