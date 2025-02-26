import { GithubLogo, LinkedinLogo, DownloadSimple } from "@phosphor-icons/react";
import * as S from "./HomeHero.styles.ts";

export function HomeHero() {
    const titleVariants = {
        hidden: { rotateX: 90, y: 100, opacity: 0, perspective: 1200 },
        visible: (delay: number) => ({
          rotateX: 0,
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay, ease: "easeInOut" }
        }),
      };

    return(
        <S.HomeHeroContainer>
            <S.WrapperText>
            <S.Heading
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            custom={0.5}
            >Hi, I'm João Gustavo Silva</S.Heading>
            </S.WrapperText>
            <S.WrapperText>
            <S.Paragraph
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            custom={1}
            >Code by code, challenge by challenge, I build, grow, and provide solutions that change the game!</S.Paragraph>
            </S.WrapperText>
                <S.Button
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                custom={1.5}
                whileHover={{ scale: 1.05, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>Projects</S.Button>
            <S.Mouse/>
            <S.SocialMedias>
                <li><a href="https://github.com/joaosilva-web" target="_blank"><GithubLogo weight="fill"/></a><S.Tooltip>Github</S.Tooltip></li>
                <li><a href="https://www.linkedin.com/in/jo%C3%A3o-silva-dev-web/" target="_blank"><LinkedinLogo weight="fill"/></a><S.Tooltip>LinkedIn</S.Tooltip></li>
                <li><a href="#"><DownloadSimple weight="fill"/></a><S.Tooltip>Resume</S.Tooltip></li>
            </S.SocialMedias>
        </S.HomeHeroContainer>
    )
}