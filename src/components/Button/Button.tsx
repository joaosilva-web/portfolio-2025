import * as S from "./Button.styles.ts";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "white";
    size?: "xsm" | "sm" | "md" | "lg";
    isAnchor?: boolean;
    href?: string;
  }
export function Button({ children, variant = 'primary', size="lg", isAnchor = false, href, ...rest}: IButtonProps) {
    return(
        isAnchor? (<S.Anchor href={href}><S.Button variant={variant} size={size} {...rest}>{children}</S.Button></S.Anchor>) : (<S.Button variant={variant} size={size} {...rest}>{children}</S.Button>)
    )
}