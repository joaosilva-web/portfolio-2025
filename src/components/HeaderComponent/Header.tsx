import * as S from "./Header.styles";

export function Header() {
    return(
            <S.HeaderContainer>
        <S.Logo><p>João Gustavo.</p><p>_</p></S.Logo>

        <S.MenuContainer>
            <li><a href="">Expertise</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Contact</a></li>
        </S.MenuContainer>
        </S.HeaderContainer>
    )
}