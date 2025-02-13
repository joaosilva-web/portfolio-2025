import { Button } from "../Button/Button.tsx";
import { GithubLogo, LinkedinLogo, DownloadSimple } from "@phosphor-icons/react";
import * as S from "./HomeHero.styles.ts";

export function HomeHero() {
    return(
        <S.HomeHeroContainer>
            <h1>Hi, I'm João Gustavo Silva</h1>
            <p>Code by code, challenge by challenge, I build, grow, and provide solutions that change the game!</p>
            <Button isAnchor href="#projects">Projects</Button>
            <S.Mouse/>
            <S.SocialMedias>
                <li><a href="https://github.com/joaosilva-web" target="_blank"><GithubLogo weight="fill"/></a><S.Tooltip>Github</S.Tooltip></li>
                <li><a href="https://www.linkedin.com/in/jo%C3%A3o-silva-dev-web/" target="_blank"><LinkedinLogo weight="fill"/></a><S.Tooltip>LinkedIn</S.Tooltip></li>
                <li><a href="#"><DownloadSimple weight="fill"/></a><S.Tooltip>Resume</S.Tooltip></li>
            </S.SocialMedias>
        </S.HomeHeroContainer>
    )
}