import styled from "styled-components";

interface IButtonProps {
    variant: 'primary' | 'white'
    size: 'xsm' | 'sm' | 'md' | 'lg'
}

const sizeVariant = {
    xsm: {size: "10rem", fontSize: "0.75rem"},
    sm: {size: "10rem", fontSize: "1rem"},
    md: {size: "12rem", fontSize: "1.25rem"},
    lg: {size: "14rem", fontSize: "1.5rem"},
  };


export const Button = styled.button<IButtonProps>`
    padding: 1rem 2rem;
    width: ${props => sizeVariant[props.size].size};
    font-size: ${props => sizeVariant[props.size].fontSize};

    background-color: ${props => props.variant === 'primary' ? props.theme.primary : props.theme[props.variant]};
    color: ${props =>  props.variant === 'primary' ? props.theme.white : props.theme.primary};
    opacity: 0.96;
    
    
    font-family: 'Roboto';
    font-weight: 600;
    text-transform: uppercase;

    border-radius: 8px;
    transition: all .2s ease;

    &&:hover {
        opacity: 1;
        cursor: pointer;
        transform: translateY(-0.15rem);
    }
`

export const Anchor = styled.a`
    text-decoration: none;
`