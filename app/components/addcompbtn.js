import React from "react";
import {useRouter  } from "next/navigation";

export default function addcompanybtn() {
    const router = useRouter();
    return (
        
        
        <div class="p-8 flex justify-center">
            
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-96" onClick={() => {
            router.push("/addcompany");
             }}>Add company IPO
                            </button></div>
    )
}
