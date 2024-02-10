// Import necessary modules and components
import React from "react";
import NavBar from "@/app/components/NavBar";

export default function IPOListingForm() {
  return (
    <>
      {/* Include the NavBar component */}
      <NavBar />

      {/* IPO Listing Form Section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-10 px-28">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                IPO Listing Form
              </h1>
              <div className="space-y-4 md:space-y-6">
                {/* Recipe Name Input */}
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

                {/* Description Textarea */}
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 h-20 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter company description"
                    required
                  />
                </div>

                {/* IPO Starting and Ending Date Inputs (Side by Side) */}
                <div className="flex flex-row space-x-4">
                {/* IPO Starting Date Input */}
                <div className="flex-grow">
                    <label htmlFor="ipoStartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    IPO Starting Date
                    </label>
                    <input
                    type="datetime-local"
                    name="ipoStartDate"
                    id="ipoStartDate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    />
                </div>

                {/* IPO Ending Date Input */}
                <div className="flex-grow">
                    <label htmlFor="ipoEndDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    IPO Ending Date
                    </label>
                    <input
                    type="datetime-local"
                    name="ipoEndDate"
                    id="ipoEndDate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    />
                </div>
                </div>

                {/* Share Price and Lot Size Inputs (Side by Side) */}
                <div className="flex flex-row space-x-4">
                {/* Share Price Input */}
                <div className="flex-grow">
                    <label htmlFor="sharePrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Share Price
                    </label>
                    <input
                    type="text"
                    name="sharePrice"
                    id="sharePrice"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter share price"
                    required
                    />
                </div>

                {/* Lot Size Input */}
                <div className="flex-grow">
                    <label htmlFor="lotSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Lot Size
                    </label>
                    <input
                    type="text"
                    name="lotSize"
                    id="lotSize"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter lot size"
                    required
                    />
                </div>
                </div>

                {/* Upload File */}
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

                {/* Other Input Fields (Category, Servings, Cooking Time, etc.) */}

                {/* Save and Cancel Buttons */}
                <div className="flex flex-row justify-end space-x-4">
                  <button
                    type="button"
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

