import React from "react";

const CardPayment = () => {
  return (
    <div
      className="flex justify-center items-center h-[80vh]"
      style={{
        backgroundImage: "url('/img/illustration-flying-airplane.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-200 font-sans">
        <h1 className="text-2xl font-medium text-gray-800 mb-5">
          Pay with Card
        </h1>

        <div className="mb-5">
          <p className="text-gray-600">abioyemichael4@gmail.com</p>
          <p className="text-lg font-semibold text-gray-800">Pay $149.99</p>
        </div>

        <div className="border-t border-gray-200 my-5"></div>

        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Enter your card details to pay
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="Enter card number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="password"
                placeholder="***"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I have read and accept the terms of use, rules and privacy policy
            </label>
          </div>
        </div>

        <div className="border-t border-gray-200 my-5"></div>

        <div className="space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium transition-colors">
            Pay Now
          </button>

          <div className="flex justify-between text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Change Payment Method
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Cancel Payment
            </a>
          </div>

          <div className="text-center text-sm text-gray-500">
            Secured by{" "}
            <span className="font-semibold text-gray-700">poystock</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
