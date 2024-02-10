"use client";
import NavBar from "@/app/components/NavBar";
import Card from "@/app/components/Card";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {

    }, []);

    return (
        <>
        <div>
            <NavBar />
            <div className="p-11 flex flex-wrap justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
            </div>
        </>
    );
}
