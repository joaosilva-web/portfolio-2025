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