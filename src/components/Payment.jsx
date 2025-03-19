import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = ({ bookingId, amount, email }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // Call the backend API to initialize payment
      const response = await axios.post(
        "http://localhost:5000/api/payment/initialize-payment",
        {
          amount,
          email,
          bookingId,
        }
      );

      if (response.data.success) {
        // Redirect to Flutterwave payment page
        window.location.href = response.data.paymentLink;
      } else {
        setError("Failed to initialize payment. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while processing your payment.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Complete Your Payment</h1>
        <p className="text-gray-700 mb-6">
          You are about to pay <span className="font-semibold">₦{amount}</span>{" "}
          for your flight booking.
        </p>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
        >
          {loading ? "Processing..." : "Proceed to Payment"}
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Payment;
