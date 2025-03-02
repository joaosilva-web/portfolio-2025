import { SectionContainer } from "../SectionContainer/SectionContaine"
import * as S from "./Experience.styles"

const experienceData = [
    { company: "Company A", position: "Software Engineer", duration: "2020 - Present", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { company: "Company B", position: "Senior Software Engineer", duration: "2018 - 2020", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { company: "Company C", position: "Lead Software Engineer", duration: "2016 - 2018", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]

export function Experience() {
    return (
        <SectionContainer themeColor="white" title="My Experience">
            {experienceData.map((experience, index) => (
                <S.JobContainer
                key={index} 
                isFirst={index === 0} 
                isLast={index === experienceData.length - 1}
                >
                <h3>{experience.company}</h3>
                <h4>{experience.position}</h4>
                <p>{experience.duration}</p>
                <p>{experience.description}</p>
            </S.JobContainer>
            ))}
        </SectionContainer>
    )
}