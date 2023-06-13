import Link from "next/link";
import LogoBasix from "../Logo";
import { HeaderContainer, NavMobile, Navigation } from "./styles";
import { StartButton } from "../Button";
import MenuIcon from "../MenuIcon";
import { useState } from "react";
import CloseIcon from "../CloseIcon";

const navigationItems = [
    {
        path: "/",
        label: "início",
    },
    {
        path: "/cases",
        label: "cases",
    },
    {
        path: "/planos",
        label: "planos",
    },
    {
        path: "/comecar",
        label: "começar",
        start: true,
    },
];

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    return (
        <HeaderContainer>
            <LogoBasix />
            <NavMobile onClick={() => setShowNav((oldState) => !oldState)}>
                <MenuIcon />
            </NavMobile>
            <Navigation className={showNav ? "active" : ""}>
                {showNav && (
                    <CloseIcon
                        onClick={() => setShowNav((oldState) => !oldState)}
                    />
                )}
                {navigationItems.map(({ path, label, start }, idx) => {
                    return (
                        <>
                            {start ? (
                                <StartButton key={label + idx} href={path}>
                                    {label}
                                </StartButton>
                            ) : (
                                <Link key={label + idx} href={path}>
                                    {label}
                                </Link>
                            )}
                        </>
                    );
                })}
            </Navigation>
        </HeaderContainer>
    );
}
