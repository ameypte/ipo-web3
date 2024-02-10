"use client";
import NavBar from "@/app/components/NavBar";
import Card from "@/app/components/Card";
import AddCompBtn from "@/app/components/addcompbtn";
import Banner from "@/app/components/banner"; // Changed 'banner' to 'Banner'
import { useEffect } from "react";



export default function Home() {

    useEffect(() => {}, []);

    return (
        <>
            <div>
                <NavBar />
                <Banner />
                <div className="mt-72">
                    <AddCompBtn />
                </div>
                <div>
                    <h1 className="font-mulish font-bold text-4xl text-deepBlue text-center mt-40">
                        Company whose IPO is Listed
                    </h1>
                    <div className="w-6 h-1 bg-green-500 mx-auto my-4"></div>
                </div>
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
