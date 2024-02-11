import React from "react";
import {useRouter} from "next/router";
import NavBar from "../components/NavBar";

export default function dashboard() {
    
    return (
        <div>
            <NavBar />
            <section
        class=" bg-no-repeat bg-cover pt-[10rem] md:pt-[16rem] pb-[180px] md:pb-[500px] mt-14"
      >
        <div class="w-10/12 md:w-11/12 max-w-[1080px] mx-auto relative pt-4">
         
          <h2
            class="hidden md:block font-mullish text-center text-2xl leading-[1.2] text-white font-extrabold"
          >
            Explore Razorpay Business Banking
          </h2>
          
          <h2
            class="inline-block md:hidden font-mullish text-[2.5rem] leading-[1.2] font-extrabold mx-auto text-white"
          >
            Explore
            <img
              src="./razorpayX.svg"
              width="168px"
              loading="lazy"
              height="32px"
              alt="razorpayX"
            />
            <span class="text-greenLight">Business Banking</span>
          </h2>
          <div
            class="w-6 h-1 bg-greenLight md:mx-auto mt-4 mb-6 md:mb-20"
          ></div>
         
          <div
            class="w-full min-h-[440px] flex md:border border-grayText border-opacity-50 rounded-md relative"
          >
            <img
              alt=""
              src="./x-flame-1.png"
              loading="lazy"
              class="-top-[240px] -scale-x-[1] rotate-180 md:scale-x-[1] md:rotate-0 -right-[50px] md:right-auto md:-top-[142px] md:-left-[140px] w-[180px] md:w-[200px] absolute z-10"
            />
            <img
              alt=""
              src="./x-flame-2.png"
              loading="lazy"
              class="hidden md:block top-[150px] -right-[180px] w-[270px] absolute z-10"
            />
            <div class="w-full p-4 md:p-10 py-12 bg-[#181c2e] z-20">
              
              <img
                src="./Xicon.svg"
                class="bg-lightBlue absolute right-2 top-12 w-12 h-12 rounded-full z-10 featureCardIcon transition-all duration-200 drop-shadow-xl md:hidden"
              />
             
              <div
                class="absolute border-t-[6rem] border-l-[6rem] border-t-transparent border-l-[#181c2e] z-20 top-6 right-0 md:hidden"
              ></div>
              <div
                class="flex flex-col justify-between items-start w-full h-full z-20"
              >
                <h3
                  class="md:hidden font-mullish text-xl md:leading-10 md:text-[28px] font-bold md:max-w-[500px] max-w-[190px] text-white"
                >
                  Open and operate fully‑functional Current Accounts on
                  RazorpayX
                </h3>
                <h3
                  class="hidden md:block font-mullish text-xl md:leading-10 md:text-[28px] font-bold md:max-w-[500px] max-w-[190px] text-white"
                >
                  Manage your company’s finances with
                  <img
                    src="./images/razorpayX.svg"
                    width="168px"
                    loading="lazy"
                    height="32px"
                    alt="razorpayX"
                    class="inline"
                  />
                  <span class="text-greenLight">Business Banking</span>
                </h3>
                
                <ul class="space-y-2 my-6 md:my-0">
                  <li
                    class="font-mullish flex text-white items-center space-x-2"
                  >
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>Open a fully digital current account</span>
                  </li>
                  <li
                    class="font-mullish flex text-white items-center space-x-2"
                  >
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>Automate payables & compliment payments</span>
                  </li>
                  <li
                    class="font-mullish flex text-white items-center space-x-2"
                  >
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>Simplify and track spends with Corporate cards</span>
                  </li>
                  <li
                    class="font-mullish flex text-white items-center space-x-2"
                  >
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>View financial insights at a glance</span>
                  </li>
                </ul>
                <div
                  class="w-full md:w-fit flex flex-col-reverse md:flex-row md:items-center md:space-x-4 gap-y-4 md:space-y-0"
                >
                  <button
                    class="relative bg-lightBlue w-full md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200"
                  >
                    Sign Up
                    <div
                      class="z-10 w-12 h-[60px] bg-greenLight skew-x-[20deg] absolute right-6 grid place-items-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="w-[20px] h-[20px] -skew-x-[20deg]"
                      >
                        <path
                          fill="currentColor"
                          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <div class="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      class="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                      >Know More</a
                    >
                    <i
                      data-feather="chevron-right"
                      class="w-5 h-5 text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
              <img
                src="./buisness-banking.png"
                alt="payment suite"
                class="hidden md:block md:max-w-[400px] lg:max-w-[600px] absolute right-0 lg:top-0 bottom-0 z-[5]"
              />
            </div>
          </div>
          
          <div
            class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-14"
          >
            
            <div
              class="w-full min-h-[15rem] relative cursor-pointer featureCard2"
            >
        
              <img
                src="./current-icon.svg"
                class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
              />
             
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                class="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                style="stroke-opacity: 0.8"
              >
                <path
                  d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                  fill="#181C2E"
                ></path>
              </svg>
              
              <div
                class="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
              >
                <div>
                  <h3
                    class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
                  >
                    Current Account
                  </h3>
                  <p class="font-mullish text-grayText mt-6">
                    Current accounts for fast-growing businesses, supported by
                    the best-in-class technology
                  </p>
                </div>
                <div class="flex items-center cursor-pointer place-items-end">
                  <a
                    href="#"
                    class="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                    >Know More</a
                  >
                  <i
                    data-feather="chevron-right"
                    class="w-5 h-5 text-lightBlue500 transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
           
            <div
              class="w-full min-h-[15rem] relative cursor-pointer featureCard2"
            >
              
              <img
                src="./capital-credit-icon.svg"
                class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
              />
              
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                class="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                style="stroke-opacity: 0.8"
              >
                <path
                  d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                  fill="#181C2E"
                ></path>
              </svg>
              
              <div
                class="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
              >
                <div>
                  <h3
                    class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
                  >
                    Capital & Credit
                  </h3>
                  <p class="font-mullish text-grayText mt-6">
                    Instant additional cash and corporate cards designed for
                    growing businesses
                  </p>
                </div>
                <div class="flex items-center cursor-pointer place-items-end">
                  <a
                    href="#"
                    class="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                    >Know More</a
                  >
                  <i
                    data-feather="chevron-right"
                    class="w-5 h-5 text-lightBlue500 transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
            
            <div
              class="w-full min-h-[15rem] relative cursor-pointer featureCard2"
            >
             
              <img
                src="./payouts-icon.svg"
                class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
              />
             
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                class="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                style="stroke-opacity: 0.8"
              >
                <path
                  d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                  fill="#181C2E"
                ></path>
              </svg>
              <div
                class="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
              >
                <div>
                  <h3
                    class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
                  >
                    Payouts
                  </h3>
                  <p class="font-mullish text-grayText mt-6">
                    Make simple, reliable & secure payouts to bank accounts, UPI
                    IDs or wallets
                  </p>
                </div>
                <div class="flex items-center cursor-pointer place-items-end">
                  <a
                    href="#"
                    class="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                    >Know More</a
                  >
                  <i
                    data-feather="chevron-right"
                    class="w-5 h-5 text-lightBlue500 transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          
          <div
            class="hidden mb-24 w-full md:flex items-center gap-y-6 justify-between flex-wrap md:border border-grayText border-opacity-50 rounded-md relative py-10 p-8"
          >
            <p class="mx-auto font-mullish text-white text-xl">
              Check out the live demo to learn how RazorpayX works.
              <span class="font-bold">No sign-up required!</span>
            </p>
            <button
              class="relative mx-auto bg-lightBlue w-full md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200"
            >
              Check out the demo
              <div
                class="z-10 w-12 h-[60px] bg-greenLight skew-x-[20deg] absolute right-6 grid place-items-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="w-[20px] h-[20px] -skew-x-[20deg]"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
        </div>
    )
}
