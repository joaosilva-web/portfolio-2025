import { Button } from "../Button/Button.tsx";
import * as S from "./HomeHero.styles.ts";

export function HomeHero() {
    return(
        <S.HomeHeroContainer>
            <h1>Hi, I'm João Gustavo Silva</h1>
            <p>Code by code, challenge by challenge, I build, grow, and provide solutions that change the game!</p>
            <Button isAnchor href="#projects">Projects</Button>
            <S.Mouse/>
        </S.HomeHeroContainer>
    )
}