import * as S from "./MyProjects.styles.ts"

interface IProjectInfos {
    imgSrc: string;
    projectUrl: string;
    title: string;
 
}

const projectsData:IProjectInfos[] = [
    {imgSrc: "project-bg.png", projectUrl: "#", title: "Results-oriented, responsive and flexible full service civil engineering firm."},
    {imgSrc: "project-bg.png", projectUrl: "#", title: "Results-oriented, responsive and flexible full service civil engineering firm."},
    {imgSrc: "project-bg.png", projectUrl: "#", title: "Results-oriented, responsive and flexible full service civil engineering firm."},
    {imgSrc: "project-bg.png", projectUrl: "#", title: "Results-oriented, responsive and flexible full service civil engineering firm."},
    {imgSrc: "project-bg.png", projectUrl: "#", title: "Results-oriented, responsive and flexible full service civil engineering firm."},
    {imgSrc: "project-bg.png", projectUrl: "#", title: "Results-oriented, responsive and flexible full service civil engineering firm."},
]

export function MyProjects() {
    return(
        <S.MyProjectsContainer>
            <h2>My Projects</h2>
            
        </S.MyProjectsContainer>
    )
}