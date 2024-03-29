
import React, { useEffect } from 'react'


function NavBar( { wallet, setWallet, address, setAddress }) {


    const getAptosWallet = () => {
        if ("aptos" in window) {
            return window.aptos;
        } else {
            window.open("https://petra.app/", `_blank`);
        }
    };

    const connectToWallet = async () => {
        const wallet = getAptosWallet();
        try {
            const response = await wallet.connect();
            console.log(response); // { address: string, address: string }
            setWallet(wallet);
            console.log(wallet);
            setAddress(response.address);

            const account = await wallet.account();
            console.log(account); // { address: string, address: string }
        } catch (error) {
            alert(error);
        }
    }

    const disconnectWallet = async () => {
        const wallet = getAptosWallet();
        try {
            const response = await wallet.disconnect();
            console.log(response); // { address: string, address: string }
            setWallet(null);
            setAddress(null);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./logo.png" className="h-14" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {
                            address ? (
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-900 dark:text-gray-100">{address}</span>
                                    <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                        onClick={disconnectWallet}>Disconnect</button>
                                </div>
                            ) : (
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={connectToWallet}>Connect</button>
                            )
                        }
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default NavBar;
