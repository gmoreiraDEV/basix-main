"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";
import GlobalStyle from "@/styles/global";

interface Props {
    children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <html>
                <body>{children}</body>
            </html>
        </ThemeProvider>
    );
}
