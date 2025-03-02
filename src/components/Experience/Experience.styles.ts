import { motion } from "framer-motion";
import styled from "styled-components";

interface IJobContainerProps {
    isFirst?: boolean;
    isLast?: boolean;
}

export const JobContainer = styled(motion.div)<IJobContainerProps>`
    justify-self: center;
    position: relative;
    padding-bottom: 2rem;
    ${({ isLast }) => isLast && "padding-bottom: 0;"}

    h4 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1.2rem;
    }

    &::before {
        content: "";
        display: block;
        position: absolute;
        left: -14px;
        width: 8px;
        height: ${({ isLast }) => (isLast ? "100%" : "calc(100% + 2rem)")};
        background-color: ${({ theme }) => theme.primaryText};
        transition: all 0.3s ease-in-out;
        ${({ isFirst }) => isFirst && "border-radius: 8px 8px 0 0;"}
    }
`;