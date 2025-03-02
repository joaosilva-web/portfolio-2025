import { ReactNode } from "react";
import * as S from "./SectionContainer.styles";

interface ISectionContainerProps {
    themeColor: "white" | "darkBlue",
    title: string,
    children: ReactNode
 
}
export function SectionContainer({themeColor,title , children}: ISectionContainerProps ) {
    return (
        <S.SectionContainer themeColor={themeColor} >
            <h2>{title}</h2>
            {children}
        </S.SectionContainer>
    )
}