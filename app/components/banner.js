import React from "react";

export default function Banner() {
    return (
        
    <section class="relative bg-[#02042a]" >
        <div
          class="w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between items-center mx-auto"
        >
          
          <div class="space-y-8">
            <h1
              class="font-mullish font-bold text-[35px] ml leading-[1.2] text-white"
            >
            Unlock Your Company's Potential: IPO Registration Made Simple!
            </h1>
            <div class="w-6 h-1 bg-green-500"></div>
            
            <button
              class="py-[14px] px-[18px] bg-blue-500 text-white rounded font-mullish font-bold hover:bg-blue-700 transition-all duration-200"
            >
              Sign Up Now
            </button>
          </div>
  
          <img
            class="w-full max-w-[680px]"
            src="./hero-illustration.jpg"
            alt=""
          />
        </div>
        <div
          class="absolute left-0 right-0 w-[102%] top-[98%] md:-right-2 z-[1000]"
        >
          <img src="./hero-shape.svg" class="w-full object-fill" alt="" />
        </div>
      </section>
        
    )
}
