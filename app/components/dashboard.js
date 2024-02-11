import React from "react";
import {useRouter} from "next/router";

export default function dashboard() {
    const router = useRouter();
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
        </div>
    )
}
