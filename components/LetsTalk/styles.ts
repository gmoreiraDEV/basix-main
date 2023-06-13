import { responsive } from "@/styles/mixins";
import { darken } from "polished";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: max-content;
    background-color: ${({ theme }) => darken(0.3, theme.brand.colors.blue)};
    padding: 2.4rem;

    ${responsive.sm`
        padding: 4.8rem;

    `}
`;

export const Wrapper = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.brand.colors.white};
`;

export const Header = styled.header`
    max-width: 79.2rem;
    margin: 0 auto;
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: ${({ theme }) => theme.brand.font.sizes.bold};

    ${responsive.sm`
        font-size: 8rem;
    `}
`;

export const Text = styled.p`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.brand.font.sizes.semi};

    ${responsive.sm`
        font-size: 3rem;
    `}
`;

export const Form = styled.form`
    max-width: 79.2rem;
    margin: 4.8rem auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

export const LabelText = styled.span`
    position: absolute;
    top: 1.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    left: 11.7rem;
    opacity: 0;
    transition: all ease-in-out 300ms;
`;

export const Label = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0.8rem 0;
    transition: all ease-in-out 300ms;

    &:focus-within {
        ${LabelText} {
            opacity: 1;
            top: -2.5rem;
            left: 9.6rem;
            background-color: ${({ theme }) => theme.brand.colors.primary};
            padding: 0.8rem 1.6rem;
            border-radius: 0.4rem 0.4rem 0 0;

            ${responsive.xs`
                left: 0;
            `}

            ${responsive.sm`
                left: 3.6rem;
            `}

            ${responsive.md`
                top: -2.5rem;
                left: 9.6rem;
            `}
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    max-width: 60rem;
    padding: 1.4rem 2rem;
    margin: 0 auto;
    background-color: transparent;
    border: 0.4rem solid ${({ theme }) => theme.brand.colors.white};
    border-radius: 0.6rem;
    color: ${({ theme }) => theme.brand.colors.primary};
    font-weight: ${({ theme }) => theme.brand.font.sizes.bold};
    transition: all ease-in-out 300ms;

    &::placeholder {
        color: ${({ theme }) => theme.brand.colors.white};
    }

    &:focus {
        background-color: ${({ theme }) => theme.brand.colors.white};
        caret-color: ${({ theme }) => theme.brand.colors.primary};
        outline: 0;
        border-radius: 0 0.6rem 0.6rem 0.6rem;

        &::placeholder {
            color: transparent;
        }
    }
`;

export const TextArea = styled(Input)``;

export const Submit = styled.button`
    max-width: 60rem;
    width: 100%;
    margin: 0 auto;
    padding: 1.4rem 2rem;
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.brand.font.sizes.black};
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.brand.colors.primary};
    color: ${({ theme }) => theme.brand.colors.white};
    border: 0;
    border-radius: 0.6rem;
    transition: all ease-in-out 300ms;

    &:hover {
        background-color: ${({ theme }) =>
            darken(0.2, theme.brand.colors.primary)};
    }
`;
