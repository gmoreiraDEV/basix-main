import Link from "next/link";
import styled from "styled-components";
import { rgba } from "polished";

export const StartButton = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    transition: all ease-in-out 300ms;
    color: ${({ theme }) => theme.brand.colors.white};
    line-height: 0;
    padding: 1.6rem 3.3rem;
    background-color: ${({ theme }) => rgba(theme.brand.colors.base, 0.8)};
    backdrop-filter: blur(5px);
    border: 0.2rem solid ${({ theme }) => theme.brand.colors.primary};
    border-radius: 0.8rem;

    &:hover {
        background-color: ${({ theme }) => theme.brand.colors.base};
        backdrop-filter: blur(0);
    }
`;
