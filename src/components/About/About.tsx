import * as S from "./About.styles.ts";

export function About() {

    const skillsData = [
        {name: "HTML"},
        {name: "CSS"},
        {name: "Javascript"},
        {name: "typescript"},
        {name: "react.js"},
        {name: "next.js"},
        {name: "node.js"},
        {name: "adonis.js"},
        {name: "api rest"},
        {name: "graphql"},
        {name: "postgresql"},
        {name: "Prisma orm"},
        {name: "styled components"},
        {name: "sass"},
        {name: "tailwind css"},
        {name: "ant design"},
        {name: "git"},
        {name: "github"},

    ]
    return(
        <S.About>
            <S.CurveBg/>
            <h2>About Me</h2>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            <S.AboutContainer>
                <S.W50Container>
                    <h3>Get to know me!</h3>
                    <p>I'm a <b>Full-Stack Web Developer</b> with a strong focus on Frontend, crafting intuitive and <b>high-performing websites</b> and <b>web applications</b>. My goal is to build seamless user experiences that contribute to the success of the overall product. Check out some of my work in the Projects section.</p>
                    <p>I'm open to <b>job</b> opportunities where I can contribute, learn, and grow. If you have a position that matches my skills and experience, <b>don't hesitate to get in touch!</b></p>
                    {/* <Button  style={{marginTop: '2rem'}} variant="white" size="sm">contact</Button> */}
                </S.W50Container>
                <S.W50Container>
                    <h3>My Skills</h3>
                    <S.SkillsContainer>
                    {skillsData.map(skill => (<S.SkillCard>{skill.name}</S.SkillCard>))}
                   </S.SkillsContainer>
                </S.W50Container>
            </S.AboutContainer>
        </S.About>
    )
}