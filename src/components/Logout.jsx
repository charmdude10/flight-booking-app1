// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Clear user session data (e.g., remove tokens)
//     localStorage.removeItem("authToken");
//     toast.success("You have been logged out successfully.");

//     // Redirect to login page after logout
//     navigate("/login");
//   }, [navigate]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Logging Out...</h2>
//         <p className="text-center text-gray-500">
//           Redirecting you to the login page. Please wait.
//         </p>
//       </div>
//       <Link to="/logout" className="text-red-500 hover:underline">
//         Logout
//       </Link>
//     </div>
//   );
// };

// export default Logout;
