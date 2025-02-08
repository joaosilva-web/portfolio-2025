import * as S from "./Button.styles.ts";

interface IButtonProps {
    children: React.ReactNode
    isAnchor?: boolean
    href?: string
}
export function Button({children, isAnchor = false, href}: IButtonProps) {
    return(
        isAnchor? (<S.Anchor href={href}><S.Button>{children}</S.Button></S.Anchor>) : (<S.Button>{children}</S.Button>)
    )
}