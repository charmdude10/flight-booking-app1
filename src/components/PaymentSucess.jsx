import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { transaction_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Call the backend API to verify payment
        const response = await axios.get(
          `http://localhost:5000/api/payment/verify-payment/${transaction_id}`
        );

        if (response.data.success) {
          setBooking(response.data.booking);
        } else {
          setError("Payment verification failed. Please contact support.");
        }
      } catch (err) {
        setError("An error occurred while verifying your payment.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [transaction_id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {loading ? (
          <p className="text-gray-700 text-center">Verifying payment...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">
              Payment Successful!
            </h1>
            <p className="text-gray-700 mb-6 text-center">
              Thank you for your payment.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Booking ID:</span> {booking?.id}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Status:</span> {booking?.status}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
