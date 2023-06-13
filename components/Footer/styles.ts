import { responsive } from "@/styles/mixins";
import { styled } from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.brand.colors.darkBlue};
    color: ${({ theme }) => theme.brand.colors.white};
    text-align: center;
    padding: 2rem;

    a {
        color: ${({ theme }) => theme.brand.colors.white};
        text-decoration: none;
        transition: all ease-in-out 300ms;

        &:hover {
            color: ${({ theme }) => theme.brand.colors.primary};
        }
    }

    ${responsive.md`
        padding: 6rem 16rem;
    `}
`;
