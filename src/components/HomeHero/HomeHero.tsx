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
                <li><a href="#"><GithubLogo weight="fill"/></a></li>
                <li><a href="#"><LinkedinLogo weight="fill"/></a></li>
                <li><a href="#"><DownloadSimple weight="fill"/></a></li>
            </S.SocialMedias>
        </S.HomeHeroContainer>
    )
}