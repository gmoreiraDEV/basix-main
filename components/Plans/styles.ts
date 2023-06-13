import { responsive } from "@/styles/mixins";
import { darken } from "polished";
import { styled } from "styled-components";

interface CardProps {
    plus?: boolean;
}

export const Container = styled.div`
    position: relative;
    padding: 2.4rem;
    background: ${({ theme }) => theme.brand.colors.blue};
    background: linear-gradient(
        0deg,
        ${({ theme }) => theme.brand.colors.darkBlue} 16%,
        ${({ theme }) => theme.brand.colors.blue} 100%
    );

    ${responsive.sm`
        padding: 4.8rem;
    `}
`;

export const IconPattern = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("assets/img/xicon.png");
    background-size: 5%;
    background-repeat: repeat;
    opacity: 0.2;
`;

export const WrapperCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
    gap: 1.2rem;
    z-index: 1;

    ${responsive.sm`
        justify-content: center;
        flex-direction: row;
        margin: 6rem 0;
        gap: 0;
    `}
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    color: ${({ theme }) => theme.brand.colors.white};

    header {
        h2 {
            color: ${({ theme }) => theme.brand.colors.primary};
            font-size: 3rem;
            font-weight: ${({ theme }) => theme.brand.font.sizes.black};
            text-transform: uppercase;
        }

        div {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        span {
            font-weight: ${({ theme }) => theme.brand.font.sizes.bold};
        }
    }

    main {
        padding: 1.6rem;
        ul {
            list-style: none;

            li {
                margin: 1.6rem;
            }
        }
    }

    button {
        padding: 1.5rem 3rem;
        color: ${({ theme }) => theme.brand.colors.white};
        background-color: ${({ theme }) => theme.brand.colors.blue};
        font-weight: ${({ theme }) => theme.brand.font.sizes.bold};
        text-transform: uppercase;
        border: none;
        border-radius: 0.6rem;
        transition: all ease-in-out 300ms;

        &:hover {
            background-color: ${({ theme }) => theme.brand.colors.darkBlue};
        }
    }
`;

export const Card = styled.div<CardProps>`
    width: 30rem;
    height: max-content;
    text-align: center;
    background: ${({ theme }) => theme.brand.colors.base};
    border-radius: 1.6rem;

    ${({ theme, plus }) =>
        plus &&
        `
            background: linear-gradient(0deg, ${theme.brand.colors.blue} 0%, ${theme.brand.colors.primary} 100% );
        `}

    ${responsive.sm`
        ${({ plus }) => plus && `transform: scale(1.2);`}        
    `}

    ${Content} {
        ${({ theme, plus }) =>
            plus &&
            `
                h2 { 
                    color: ${theme.brand.colors.white};
                    font-size: 4rem;
                }

                button {
                    background-color: ${theme.brand.colors.primary};

                    &:hover {
                        background-color: ${darken(
                            0.2,
                            theme.brand.colors.primary
                        )};
                    }
                }
            `}
    }
`;

export const Label = styled.span`
    width: max-content;
    padding: 0.5rem 1.2rem;
    background-color: ${({ theme }) => theme.brand.colors.darkBlue};
    border-radius: 0.5rem;
    font-weight: ${({ theme }) => theme.brand.font.sizes.black};
    text-transform: uppercase;
`;
