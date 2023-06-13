import { responsive } from "@/styles/mixins";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    width: 100%;
    position: relative;

    ${responsive.md`
        gap: 32rem;
    `}
`;

export const NavMobile = styled.div`
    display: flex;

    svg {
        transition: all ease-in-out 300ms;
    }

    &:hover {
        svg {
            fill: ${({ theme }) => theme.brand.colors.white};
        }
    }

    ${responsive.md`
       display: none;
    `}
`;

export const Navigation = styled.nav`
    display: none;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;
    z-index: 1;

    a {
        text-transform: uppercase;
        text-decoration: none;
        transition: all ease-in-out 300ms;
        color: ${({ theme }) => theme.brand.colors.white};

        &:hover {
            color: ${({ theme }) => theme.brand.colors.primary};
        }
    }

    svg {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        transform: scale(0.8);
    }

    &.active {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: max-content;
        padding: 5rem 3.2rem;
        background: ${({ theme }) => theme.brand.colors.darkBlue};
        border-radius: 0.5rem;
        z-index: 99;
    }

    ${responsive.md`
        display: flex;
        flex-direction: row;
    `}
`;
