"use client";
import React from "react";
import { useState } from "react";


const { Account, AccountAddress, Aptos, AptosConfig, Network, NetworkToNetworkName } = require("@aptos-labs/ts-sdk");


const APTOS_NETWORK = Network.DEVNET;
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptos = new Aptos(config);

export default function IPOListingForm({ wallet, setWallet, address, setAddress }) {


  const [ipoStartDate, setIPOStartDate] = useState("");
  const [ipoEndDate, setIPOEndDate] = useState("");
  const [sharePrice, setSharePrice] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [totalLots, setTotalLots] = useState(""); // New field

  const [qibPercentage, setQIBPercentage] = useState(0);
  const [nilPercentage, setNILPercentage] = useState(0);
  const [retailPercentage, setRetailPercentage] = useState(0);
  const [stakeholderPercentage, setStakeholderPercentage] = useState(0);
  const [employeePercentage, setEmployeePercentage] = useState(0);



  const addNewList = async () => {
    if (!wallet) return [];

    const transaction = {
      data: {
        function: `${moduleAddress}::ipo::create_list`,
        functionArguments: []
      }
    }
    try {
      // sign and submit transaction to chain
      const response = await wallet.signAndSubmitTransaction(transaction);
      // wait for transaction
      await aptos.waitForTransaction({ transactionHash: response.hash });
    } catch (error) {
    }
  };
  const handleSliderChange = (percentage, setPercentage) => {
    // Ensure total percentage does not exceed 100
    const remainingPercentage = 100 - (qibPercentage + nilPercentage + retailPercentage + stakeholderPercentage + employeePercentage);
    if (percentage <= remainingPercentage) {
      setPercentage(percentage);
    } else {

    }
  };


  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
  const priceRegex = /^\d+(\.\d{1,2})?$/;
  const lotSizeRegex = /^\d+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    
      const responce = await fetch("/api/upload/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyName,ipoStartDate ,ipoEndDate,lotSize,companyDescription,totalLots}),
      });
  
      const data = await responce.json();
     
      console.log(data);
    // All validations passed, proceed with form submission
    alert("Form submitted successfully!");
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-10 px-28">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                IPO Listing Form
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="recipeName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="recipeName"
                    id="recipeName"
                    onChange={(e)=>setCompanyName(e.target.value)}
                    className="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 h-20 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter company description"
                    required
                  />
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="flex-grow">
                    <label
                      htmlFor="ipoStartDate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      IPO Starting Date
                    </label>
                    <input
                      type="datetime-local"
                      name="ipoStartDate"
                      id="ipoStartDate"
                      value={ipoStartDate}
                      onChange={(e) => setIPOStartDate(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="ipoEndDate"
                      className="block mb-2                     text-sm font-medium text-gray-900 dark:text-white"
                    >
                      IPO Ending Date
                    </label>
                    <input
                      type="datetime-local"
                      name="ipoEndDate"
                      id="ipoEndDate"
                      value={ipoEndDate}
                      onChange={(e) => setIPOEndDate(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="flex-grow">
                    <label
                      htmlFor="sharePrice"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Share Price
                    </label>
                    <input
                      type="text"
                      name="sharePrice"
                      id="sharePrice"
                      value={sharePrice}
                      onChange={(e) => setSharePrice(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter share price"
                      pattern="^\d+(\.\d{1,2})?$"
                      required
                    />
                    <small className="text-gray-500 dark:text-gray-400">
                      Please enter a valid positive decimal.
                    </small>
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="lotSize"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Lot Size
                    </label>
                    <input
                      type="text"
                      name="lotSize"
                      id="lotSize"
                      value={lotSize}
                      onChange={(e) => setLotSize(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter lot size"
                      pattern="^\d+$"
                      required
                    />
                    <small className="text-gray-500 dark:text-gray-400">
                      Please enter a valid positive integer.
                    </small>
                  </div>
                </div>
                {/* New Field: Total Number of Lots */}
                <div>
                  <label
                    htmlFor="totalLots"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Total Number of Lots
                  </label>
                  <input
                    type="text"
                    name="totalLots"
                    id="totalLots"
                    value={totalLots}
                    onChange={(e) => setTotalLots(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter total number of lots"
                    pattern="^\d+$"
                    required
                  />
                  <small className="text-gray-500 dark:text-gray-400">
                    Please enter a valid positive integer.
                  </small>
                </div>

                {/* Table with Sliders */}
                <div className="space-y-4 md:space-y-6">
                  {/* ... (previous code) */}

                  {/* Table with Sliders */}
                  <div className="flex flex-col space-y-4">
                    <table className="min-w-full border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 border-b text-gray-900 dark:text-white">Investor Type</th>
                          <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 border-b text-gray-900 dark:text-white">Percentage Share</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 text-gray-900 dark:text-white">QIB</td>
                          <td className="py-2 px-4">
                            <div className="flex items-center">
                              <input
                                type="range"
                                min="0"
                                max={100}
                                step="1"
                                value={qibPercentage}
                                onChange={(e) => handleSliderChange(parseInt(e.target.value), setQIBPercentage, 'qib')}
                                className="flex-grow mr-2"
                              />
                              {qibPercentage}%
                            </div>
                          </td>
                        </tr>
                        {/* Repeat similar rows for NIL, Retail, Stakeholder, and Employee */}
                        <tr>
                          <td className="py-2 px-4 text-gray-900 dark:text-white">NIL</td>
                          <td className="py-2 px-4">
                            <div className="flex items-center">
                              <input
                                type="range"
                                min="0"
                                max={100}
                                step="1"
                                value={nilPercentage}
                                onChange={(e) => handleSliderChange(parseInt(e.target.value), setNILPercentage, 'nil')}
                                className="flex-grow mr-2"
                              />
                              {nilPercentage}%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 text-gray-900 dark:text-white">Retail</td>
                          <td className="py-2 px-4">
                            <div className="flex items-center">
                              <input
                                type="range"
                                min="0"
                                max={100}
                                step="1"
                                value={retailPercentage}
                                onChange={(e) => handleSliderChange(parseInt(e.target.value), setRetailPercentage, 'retail')}
                                className="flex-grow mr-2"
                              />
                              {retailPercentage}%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 text-gray-900 dark:text-white">Stakeholder</td>
                          <td className="py-2 px-4">
                            <div className="flex items-center">
                              <input
                                type="range"
                                min="0"
                                max={100}
                                step="1"
                                value={stakeholderPercentage}
                                onChange={(e) => handleSliderChange(parseInt(e.target.value), setStakeholderPercentage, 'stakeholder')}
                                className="flex-grow mr-2"
                              />
                              {stakeholderPercentage}%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 text-gray-900 dark:text-white">Employee</td>
                          <td className="py-2 px-4">
                            <div className="flex items-center">
                              <input
                                type="range"
                                min="0"
                                max={100}
                                step="1"
                                value={employeePercentage}
                                onChange={(e) => handleSliderChange(parseInt(e.target.value), setEmployeePercentage, 'employee')}
                                className="flex-grow mr-2"
                              />
                              {employeePercentage}%
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <label
                      htmlFor="file_input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Upload Logo
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            PNG or JPG (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end space-x-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Save IPO
                    </button>
                    <button
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
