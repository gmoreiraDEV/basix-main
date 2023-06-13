"use client";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LetsTalk from "@/components/LetsTalk";
import Main from "@/components/Main";
import Plans from "@/components/Plans";

export default function Home() {
    return (
        <Main>
            <Hero />
            <Cases />
            <Plans />
            <LetsTalk />
            <Footer />
        </Main>
    );
}
