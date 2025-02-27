import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import * as S from "./MyProjects.styles.ts";

interface IProjectInfos {
  imgSrc: string;
  projectUrl: string;
  githubUrl: string;
  projectName: string;
  title: string;
}

const projectsData: IProjectInfos[] = [
  {
    imgSrc: "project-bg.png",
    projectUrl: "#",
    githubUrl: "#",
    projectName: 'Project',
    title:
      "Results-oriented, responsive and flexible full service civil engineering firm.",
  },
  {
    imgSrc: "project-bg.png",
    projectUrl: "#",
    githubUrl: "#",
    projectName: 'Project',
    title:
      "Results-oriented, responsive and flexible full service civil engineering firm.",
  },
  {
    imgSrc: "project-bg.png",
    projectUrl: "#",
    githubUrl: "#",
    projectName: 'Project',
    title:
      "Results-oriented, responsive and flexible full service civil engineering firm.",
  },
  {
    imgSrc: "project-bg.png",
    projectUrl: "#",
    githubUrl: "#",
    projectName: 'Project',
    title:
      "Results-oriented, responsive and flexible full service civil engineering firm.",
  },
  {
    imgSrc: "project-bg.png",
    projectUrl: "#",
    githubUrl: "#",
    projectName: 'Project',
    title:
      "Results-oriented, responsive and flexible full service civil engineering firm.",
  },
  {
    imgSrc: "project-bg.png",
    projectUrl: "#",
    githubUrl: "#",
    projectName: 'Project',
    title:
      "Results-oriented, responsive and flexible full service civil engineering firm.",
  },
];

export function MyProjects() {
  return (
    <S.MyProjectsContainer>
      <h2>My Projects</h2>
      <S.GridContainer>
        {projectsData.map((project) => (
          <S.ProjectCard
            // whileHover={{ scale: 1.05 }}
          >
            <img src={project.imgSrc} alt={project.title} />
            <S.ProjectCardContent
              whileHover={{ opacity: 1, display: "flex" }}
              transition={{ ease: "easeIn", duration: 0.5  }}
            >
                <h2>{project.projectName}</h2>
              <p>{project.title}</p>
              <S.ProjectCardLinks>
              <a href={project.projectUrl}><ArrowSquareOut/></a>
              <a href=""><GithubLogo/></a>
              </S.ProjectCardLinks>
            </S.ProjectCardContent>
          </S.ProjectCard>
        ))}
      </S.GridContainer>
    </S.MyProjectsContainer>
  );
}
