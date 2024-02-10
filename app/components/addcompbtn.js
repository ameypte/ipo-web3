import React from "react";
import {useRouter  } from "next/navigation";

export default function addcompanybtn() {
    const router = useRouter();
    return (
        
        <section class="bg-[url(/CTABg.svg)] w-full h-full bg-no-repeat bg-cover relative ctaSection min-h-[510px]">
      <div class="w-11/12 max-w-[1080px] relative flex flex-row mx-auto items-center justify-between space-x-20 pt-16 ">

        <div class="flex flex-col gap-5 mt-12">
          <h2 class="font-mullish font-bold text-2xl text-white">
            Take Your Company Public: Click Here to Launch Your IPO Journey
          </h2>
          <div class="w-6 h-1 bg-greenLight"></div>
          
          <button class="min-w-[32px] font-mullish text-sm font-bold bg-white text-lightBlue300 border flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200 py-3 px-4 place-self-start " onClick={() => {
            router.push("/addcompany");}}>
        Add Company IPO
            <svg
                viewBox="0 0 24 24"
                focusable="false"
                class="w-[14px] h-[14px] ml-3"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg>
          </button>
        </div>

        <div>
          <img src="./ctaImg.svg" alt="" width="240px" height="282px" class="mt-16 pt-5"/>
        </div>

      </div>
      
    </section>
    
        
        
    )
}
