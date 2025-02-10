import styled from "styled-components";

export const About = styled.section`
    min-height: 100vh;
    text-align: center;
    background-color: ${props => props.theme.primaryText};
    position: relative;
    padding-bottom: 5rem;

    h2 {
        padding-top: 6.25rem;
        text-transform: uppercase;
        font-size: 3rem;
        color: ${props => props.theme.white};
    }

    p {
        color: ${props => props.theme.white};
        max-width: 1200px;
        margin: 1rem auto 0 auto;
        font-size: 1.5rem;
        opacity: 0.85;
    }
`

export const CurveBg = styled.div`
position: absolute;
    width: 100%;
    height: 77px;
    display: block;
    margin-top: calc(-4rem);
    z-index: -1;
    text-align: center;
    background-image: url("../../../public/curve.svg");
    background-position:top;
    background-size: cover;
    background-repeat: no-repeat;
`

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const W50Container = styled.div`
    padding-top: 3rem;
    width: 40%;

    display: flex;
    flex-direction: column;

    h3 {
        text-align: left;
        font-size: 1.5rem;
        color: ${props => props.theme.white};
        /* padding: 0 2rem; */
    }

    p {
        text-align: left;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.75;
        /* padding: 0 2rem; */
    }
`

export const SkillsContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

export const SkillCard = styled.div`
    min-width: 50px;
    min-height: 30px;
    background: rgba(245, 247, 254, 0.57);
    border-radius: 16px;
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 4px );
    color: ${props => props.theme.primary};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    font-weight: 800;
    text-transform: uppercase;
`