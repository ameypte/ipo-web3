"use client";
"use client";
import React from "react";
import NavBar from "@/app/components/NavBar";
import { useState } from "react";

export default function IPOListingForm() {
  const [ipoStartDate, setIPOStartDate] = useState("");
  const [ipoEndDate, setIPOEndDate] = useState("");
  const [sharePrice, setSharePrice] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
  const priceRegex = /^\d+(\.\d{1,2})?$/;
  const lotSizeRegex = /^\d+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Company Name
    if (!companyName.trim()) {
      alert("Company name is required.");
      return;
    }

    // Validate Company Description
    if (!companyDescription.trim()) {
      alert("Company description is required.");
      return;
    }

    // Validate IPO starting date
    if (!dateRegex.test(ipoStartDate)) {
      alert("Invalid IPO starting date format. Please use YYYY-MM-DDTHH:mm.");
      return;
    }

    // Validate IPO ending date
    if (!dateRegex.test(ipoEndDate)) {
      alert("Invalid IPO ending date format. Please use YYYY-MM-DDTHH:mm.");
      return;
    }

    // Validate Share Price
    if (!priceRegex.test(sharePrice)) {
      alert(
        "Invalid share price format. Please enter a valid positive decimal."
      );
      return;
    }

    // Validate Lot Size
    if (!lotSizeRegex.test(lotSize)) {
      alert("Invalid lot size format. Please enter a valid positive integer.");
      return;
    }

    // All validations passed, proceed with form submission
    alert("Form submitted successfully!");
  };

  return (
    <>
      <NavBar />
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
        </section>
      </>
    );
  }
  

