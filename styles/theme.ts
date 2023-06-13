import { DefaultTheme } from "styled-components";
import { inter } from "./fonts";

export const defaultTheme: DefaultTheme = {
    brand: {
        colors: {
            primary: "#f50871",
            accent: "#c8d808",
            base: "#022939",
            blue: "#02B3FD",
            darkBlue: "#02587c",
            white: "#ffffff",
        },
        font: {
            family: inter.style.fontFamily,
            sizes: {
                regular: 400,
                semi: 600,
                bold: 700,
                black: 900,
            },
        },
    },
};
