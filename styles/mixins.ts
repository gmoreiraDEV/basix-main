import { css } from "styled-components";
import { breakpoints } from "./variables";

type cssParams = Parameters<typeof css>;
const keys = Object.keys(breakpoints) as Array<keyof typeof breakpoints>;

export const responsive = keys.reduce((accumulator, label) => {
    accumulator[label] = (...args: cssParams) => css`
        @media (min-width: ${breakpoints[label]}) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {} as Record<keyof typeof breakpoints, Function>);
