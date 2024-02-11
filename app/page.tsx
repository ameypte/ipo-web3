"use client";
import NavBar from "@/app/components/NavBar";
import Card from "@/app/components/Card";
import { useEffect, useState } from "react";
import IPOListingForm from "@/app/components/AddCompany";
import Banner from "@/app/components/Banner";

const {
    Account,
    AccountAddress,
    Aptos,
    AptosConfig,
    Network,
    NetworkToNetworkName,
} = require("@aptos-labs/ts-sdk");

const APTOS_NETWORK = Network.DEVNET;
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptos = new Aptos(config);

export default function Home() {
    const [wallet, setWallet] = useState({});
    const [address, setAddress] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetchList();
    }, [wallet]);

    const fetchList = async () => {
        if (!wallet) return [];
        // change this to be your module account address
        const moduleAddress =
            "0x2c8b10208a524284d52da1ba0d6ab45cce9c14d355442382fc26743c5ba6dea9";
        try {
            const ipoListResource = await aptos.getAccountResource({
                accountAddress: address,
                resourceType: `${moduleAddress}::ipo::IPOList`,
            });
            alert(ipoListResource);
            console.log(ipoListResource);
        } catch (e: any) {
            alert("Error fetching list: " + e.message);
        }
    };

    return (
       
            <div className="bg-gray-50 dark:bg-gray-900">
                <NavBar
                    wallet={wallet}
                    setWallet={setWallet}
                    address={address}
                    setAddress={setAddress}
                />
                
                         <Banner/>
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? "Back" : "Add Company"}
                </button>
                

                {toggle ? (
                    <IPOListingForm
                        wallet={wallet}
                        address={address}
                        setWallet={setWallet}
                        setAddress={setAddress}
                    />
                ) : (
                    <div>
                    <div className=" flex flex-wrap justify-center">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
        </div>            
                )}
            </div>
      

    );
}
