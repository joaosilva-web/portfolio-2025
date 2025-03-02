import { motion } from "framer-motion";
import styled from "styled-components";

interface ISectionProps {
    themeColor: "white" | "darkBlue";
}

const themeMap = {
    white: {
        bgColor: "bgColor",
        color: "primaryText",
    },
    darkBlue: {
        bgColor: "primaryText",
        color: "white",
    }
}

export const SectionContainer = styled(motion.section)<ISectionProps>`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;

        background-color: ${({theme, themeColor}) => theme[themeMap[themeColor].bgColor]};
        position: relative;

        h2 {
        padding: 2rem;
        text-transform: uppercase;
        color: ${({theme, themeColor}) => theme[themeMap[themeColor].color]};
    }

    p {
        font-size: 1.5rem;
        color: ${({theme, themeColor}) => theme[themeMap[themeColor].color]};
    }
`