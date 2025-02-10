import { Button } from "../Button/Button.tsx"
import * as S from "./ProjectCard.styles.ts"

export interface IProjectCard {
    imgSrc: string;
    title: string;
    projectUrl: string;
}

export function ProjectCard({imgSrc, projectUrl, title}:IProjectCard) {
    return(
        <S.ProjectCard>
                    <figure>
                        <img src={imgSrc} alt="" />
                        <figcaption>
                            <h3>{title}</h3>
                            <Button size="xsm" variant="white" isAnchor href={projectUrl}>View Project</Button>
                        </figcaption>
                        <div className="overlay"></div>
                    </figure>
         </S.ProjectCard>
    )
}