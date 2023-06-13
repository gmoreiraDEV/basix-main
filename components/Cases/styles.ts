import { styled } from "styled-components";
import { rgba } from "polished";
import { responsive } from "@/styles/mixins";

interface ContainerProps {
    image?: string;
}

interface BulletProps {
    hover?: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    padding: 1.6rem;
    background: url(${(props) => props.image}) center no-repeat;
    background-size: cover;
    transition: all ease-in-out 300ms;

    z-index: 0;

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => rgba(theme.brand.colors.blue, 0.5)};
        backdrop-filter: blur(5px);
        z-index: -1;
    }

    ${responsive.md`
        padding: 4.8rem;
    `}
`;

export const WrapperContainer = styled.div`
    max-width: 100%;
    height: max-content;
    display: grid;
    grid-template-rows: max-content max-content max-content;
    justify-content: center;
    gap: 3.2rem;
    margin: 0 auto;

    ${responsive.sm`
        justify-content: unset;    
    `}

    ${responsive.md`
        max-width: 100rem;
        gap: 0;
    `}
`;

export const Card = styled.div`
    width: max-content;
    max-width: 25rem;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3.2rem;
    background: ${({ theme }) => theme.brand.colors.white};
    color: ${({ theme }) => theme.brand.colors.base};
    box-shadow: ${({ theme }) => rgba(theme.brand.colors.base, 0.2)} 0px 8px
        24px;
    text-align: right;
    padding: 1rem 2rem;
    border: 0.2rem solid ${({ theme }) => theme.brand.colors.white};
    border-radius: 1.6rem;
    transition: all ease-in-out 300ms;
    gap: 1.2rem;
    position: relative;
    transform-style: preserve-3d;
    z-index: 10;

    &:hover {
        border-color: ${({ theme }) => theme.brand.colors.primary};
        box-shadow: ${({ theme }) => rgba(theme.brand.colors.base, 0.35)} 0px
            5px 15px;

        &:after {
            border-color: ${({ theme }) => theme.brand.colors.primary};
        }
    }

    h2 {
        font-size: 2rem;
        font-weight: ${({ theme }) => theme.brand.font.sizes.bold};
    }

    p {
        font-weight: ${({ theme }) => theme.brand.font.sizes.regular};
    }

    &:nth-child(odd),
    &:nth-child(even) {
        text-align: center;
    }

    ${responsive.xs`
        max-width: 35rem;       
    `}

    ${responsive.sm`      
        max-width: 30rem;       

        &:nth-child(even) {
            text-align: right;

            button {
                align-self: flex-end;
            }
        }

        &:nth-child(odd) {
            text-align: left;
            justify-self: flex-end;

            button {
                align-self: flex-start;
            }

            &:before {
                left: -2rem;
            }
            &:after {
                left: -2.4rem;
            }
        }

        &:before,
        &:after {
            content: "";
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            top: 50%;
            right: 0;
            transition: all ease-in-out 300ms;
            transform-style: preserve-3d;
            background-color: ${({ theme }) => theme.brand.colors.white};
            border: 2px solid ${({ theme }) => theme.brand.colors.white};
        }

        &:before {
            transform: rotate(45deg) translate(0, calc(-50% - 0.4rem))
                translateZ(0px);
            border: 0;
        }

        &:after {
            transform: rotate(45deg) translate(0, calc(-50% - 0.5rem))
                translateZ(-1px);
        }
    `}

    ${responsive.md`
        max-width: 40rem;      
    `}

    ${responsive.lg`
        max-width: 45rem; 
         
        h2 {
            white-space: nowrap;
        }    
    `}
`;

export const Bullet = styled.div<BulletProps>`
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 8.2rem;
    border-radius: 50%;
    background-color: ${({ theme, hover }) =>
        hover ? theme.brand.colors.base : theme.brand.colors.primary};
    transition: all ease-in-out 300ms;

    z-index: 10;

    ${responsive.sm`
        &:nth-child(2) {
            top: 32rem;
        }

        &:nth-child(3) {
            top: 55.3rem;
        }

    `}

    ${responsive.md`        
        &:nth-child(2) {
            top: 24.5rem;
        }
        &:nth-child(3) {
            top: 40.3rem;
        }
    `}
`;

export const Line = styled.div`
    display: none;

    ${responsive.sm`
        justify-content: space-around;
        align-items: center;
        gap: 3.2rem;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.5rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.brand.colors.white};
        box-shadow: ${({ theme }) => rgba(theme.brand.colors.base, 0.2)} 0px 8px
            24px;
        transform: translate(-50%, -50%);
        z-index: 10;
        display: flex;
        height: 65rem
    `}

    ${responsive.md`        
        height: 50rem;
    `}
`;
export const Button = styled.button`
    width: 14rem;
    align-self: center;
    padding: 1.4rem 0.8rem;
    background-color: ${({ theme }) => theme.brand.colors.base};
    color: ${({ theme }) => theme.brand.colors.white};
    border: none;
    border-radius: 0.4rem;
    font-weight: ${({ theme }) => theme.brand.font.sizes.bold};
    transition: all ease-in-out 300ms;

    &:hover {
        background-color: ${({ theme }) => theme.brand.colors.primary};
    }
`;
