import { IProjectCard, ProjectCard } from "../ProjectCard/ProjectCard.tsx"
import * as S from "./MyProjects.styles.ts"

const projectsData:IProjectCard[] = [
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
            <S.GridContainer>
                {projectsData.map(project => (<ProjectCard imgSrc={project.imgSrc} projectUrl={project.projectUrl} title={project.title}/>))}
            </S.GridContainer>
        </S.MyProjectsContainer>
    )
}