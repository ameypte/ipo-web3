"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function IPOApplicationForm() {
  const companyName = "ABC Ltd."; // 1st input
  const fixedSharePrice = 10; // Fixed Share Price
  const [lotsApplied, setLotsApplied] = useState(""); // 2nd input
  const [totalAmount, setTotalAmount] = useState(0); // Calculated input

  const handleLotsAppliedChange = (e) => {
    setLotsApplied(e.target.value);
    updateTotalAmount(fixedSharePrice, e.target.value);
  };

  const updateTotalAmount = (price, lots) => {
    const totalPrice = price && lots ? price * lots : 0;
    setTotalAmount(totalPrice);
  };

  const handleApplyIPO = (e) => {
    e.preventDefault();
    // Perform actions on IPO application (e.g., show a dialog)
    alert("IPO Applied!");
  };

  return (
    <>
      <NavBar />
      <form className="max-w-sm mx-auto mt-16" onSubmit={handleApplyIPO}>
        <div className="mb-5">
          <label
            htmlFor="companyName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            readOnly
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sharePrice"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Share Price
          </label>
          <input
            type="text"
            id="sharePrice"
            value={`Rs ${fixedSharePrice}`} // Display fixed Share Price
            readOnly
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="lotsApplied"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Lots Applied
          </label>
          <input
            type="number"
            id="lotsApplied"
            value={lotsApplied}
            onChange={handleLotsAppliedChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter number of lots"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="totalAmount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Total Amount
          </label>
          <input
            type="text"
            id="totalAmount"
            value={`Rs ${totalAmount}`}
            readOnly
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Apply IPO
        </button>
      </form>
    </>
  );
}
