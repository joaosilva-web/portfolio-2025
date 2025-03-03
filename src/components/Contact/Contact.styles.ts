import { motion } from "framer-motion";
import styled from "styled-components";


export const Contact = styled(motion.div)`
display: flex;
justify-content: space-between;
gap: 2rem;
color: ${({theme}) => theme.primaryText};

img {
    width: 50%;
}
`

export const ContactForm = styled(motion.form)`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.white};
    padding: 1rem;
    border-radius: 6px;
    width: 50%;

    input, textarea, button {
        padding: 0.5rem;
        border-radius: 6px;
        margin-bottom: 0.5rem;
        color: ${({theme}) => theme.primaryText};
    }

    input, textarea {
        background-color: ${({theme}) => theme.secondary};
    }

    input:focus, textarea:focus, button:focus {
        border: 2px solid ${({theme}) => theme.primaryText};
    }

    button {
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
    }
`