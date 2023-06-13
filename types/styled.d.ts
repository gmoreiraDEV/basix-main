import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        brand: {
            colors: {
                primary: string;
                accent: string;
                base: string;
                blue: string;
                darkBlue: string;
                white: string;
            };
            font: {
                family: string;
                sizes: {
                    regular: number;
                    semi: number;
                    bold: number;
                    black: number;
                };
            };
        };
    }
}
