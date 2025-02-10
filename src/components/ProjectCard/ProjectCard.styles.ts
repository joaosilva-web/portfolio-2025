import styled from "styled-components";


export const ProjectCard = styled.div`
    width: 400px;
    height: 250px;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        /* border-radius: 2rem; */
        transition: all.4s ease;
    }

    &:hover img{
        scale: 1.1;
        opacity: 0;
    }

    figcaption {
        position: absolute;
        top: 0;
        left: 0;
        scale: 1.1;

        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        opacity: 0;
        scale: 0.5;
        padding: 1rem;

        h3{
            font-size: 1.5rem;
            font-weight: 300;
            text-align: center;
            color: ${props => props.theme.white};
            margin-bottom: 1rem;
        }
    }

    &:hover figcaption {
        opacity: 1;
        transition: all .5s ease;
        z-index: 999;
        scale: 1;
    }

    .overlay {
        opacity: 0;
        position: absolute;
        z-index: 998;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.primaryText};
        width: 100%;
        height: 100%;
        transition: all .5s ease;
        scale: 1.1;
    }

    &:hover .overlay{
        scale: 1;
        opacity: 0.99;
    }

`