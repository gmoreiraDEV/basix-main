import { responsive } from "@/styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: max-content;
    padding: 2.4rem;
    background-color: ${({ theme }) => theme.brand.colors.base};
    overflow: hidden;

    ${responsive.sm`
        padding: 4.8rem;
    `}
`;

export const WrapperContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: max-content;
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3.2rem;
    margin-top: 2rem;
    color: ${({ theme }) => theme.brand.colors.white};
    z-index: 1;

    h1 {
        width: 9ch;
        font-size: 4rem;
        font-weight: ${({ theme }) => theme.brand.font.sizes.bold};
    }

    p {
        width: 20ch;
        font-size: 2rem;
        font-weight: ${({ theme }) => theme.brand.font.sizes.semi};
    }

    ${responsive.xs`
        h1 {
            width: 12ch;
            font-size: 6rem;
        }
    `}
    ${responsive.sm`
        margin-top: 12rem;

        h1 {
            width: 12ch;
            font-size: 8rem;
        }

        p {
            width: 40ch;
            font-size: 2.4rem;
        }
    `}
`;

export const Blobs = styled.div`
    position: absolute;
    right: 5rem;
    bottom: -30rem;
    transform: scale(5);
    z-index: 0;

    div {
        display: grid;

        svg {
            grid-column: 1;
            grid-row: 1;
            width: 100%;
            height: 100%;

            &:last-child {
                filter: blur(50px);
            }
        }
    }
`;
