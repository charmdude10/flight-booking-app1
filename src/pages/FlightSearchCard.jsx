import { Fullscreen } from "lucide-react";
import React from "react";

const FlightSearchCard = () => {
  return (
    <div
      className="flex justify-center items-center h-[90vh]"
      style={{
        backgroundImage: "url('/img/illustration-flying-airplane.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto  bg-white shadow-lg bg-opacity-70 rounded-lg overflow-hidden p-6">
        {/* Search Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Search Flights</h2>
          <form>
            {/* Trip Type */}
            <div className="flex space-x-4 mb-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Return
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded">One-way</button>
              <button className="bg-gray-200 px-4 py-2 rounded">
                Multi-city
              </button>
            </div>

            {/* From and To */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="from"
                >
                  From
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="from"
                  type="text"
                  placeholder="Departure city"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="to"
                >
                  To
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="to"
                  type="text"
                  placeholder="Destination city"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="departure"
                >
                  Departure
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="departure"
                  type="date"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="return"
                >
                  Return
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="return"
                  type="date"
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Search Flights
            </button>
          </form>
        </div>

        {/* Flight Results */}
        <div>
          <h3 className="text-xl font-bold mb-4">718 Results found</h3>

          {/* Flight Card */}
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Air France (AP 1417)</span>
              <span className="text-sm text-gray-600">129g CO2 | 23kg</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div>
                <p className="text-sm text-gray-600">18 Feb 25, 23:55</p>
                <p className="font-bold">
                  Lagos, Murata Muhammed International Airport
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">14h 15m</p>
                <p className="text-sm text-gray-600">1 Stop | CDG</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">19 Feb 25, 13:45</p>
                <p className="font-bold">London Heathrow</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="text-blue-500 hover:underline">
                Flight Details
              </button>
              <div>
                <span className="font-bold">1,071,760</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                  Book now
                </button>
              </div>
            </div>
          </div>

          {/* Another Flight Card */}
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">KLM (PL 1004)</span>
              <span className="text-sm text-gray-600">12kg CO2 | 23kg</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div>
                <p className="text-sm text-gray-600">7 Mar 25, 10:00</p>
                <p className="font-bold">London Heathrow</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">10h 15m</p>
                <p className="text-sm text-gray-600">1 Stop | AMS</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">7 Mar 25, 21:00</p>
                <p className="font-bold">
                  Lagos, Murata Muhammed International Airport
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="text-blue-500 hover:underline">
                Flight Details
              </button>
              <div>
                <span className="font-bold">1,071,760</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchCard;

// import React from "react";

// const FlightSearchCard = () => {
//   return (
//     <div
//       className="flex justify-center items-center h-[80vh]"
//       style={{
//         backgroundImage: "url('/img/illustration-flying-airplane.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >

//       <div className="max-w-4xl mx-auto p-4 bg-red-500 shadow-lg rounded-lg">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex space-x-4">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//               Return
//             </button>
//             <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
//               One-way
//             </button>
//             <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
//               Multi-city
//             </button>
//           </div>
//           <div className="text-sm text-gray-600">
//             Economy Class | 1 Travelier(s)
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               From
//             </label>
//             <input
//               type="text"
//               value="Lagos (LOS)"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               To
//             </label>
//             <input
//               type="text"
//               value="London (LHR)"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               readOnly
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Departure
//             </label>
//             <input
//               type="text"
//               value="18-02-2025"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Return
//             </label>
//             <input
//               type="text"
//               value="07-03-2025"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               readOnly
//             />
//           </div>
//         </div>

//         <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-4">
//           Search Flights
//         </button>

//         <div className="text-sm text-gray-600 mb-4">718 Results found</div>

//         <div className="border-t border-b py-4">
//           <div className="flex justify-between items-center mb-2">
//             <div className="text-lg font-semibold">Air France</div>
//             <div className="text-sm text-gray-600">Flight AP 1417</div>
//           </div>
//           <div className="grid grid-cols-4 gap-4 text-sm text-gray-700">
//             <div>129g CO2</div>
//             <div>23kg</div>
//             <div>18 Feb 25 23:55</div>
//             <div>Lagos, Murata Muhammed International Airport</div>
//           </div>
//           <div className="text-sm text-gray-600 mt-2">
//             14h15 Duration | 1 Stop (CDG)
//           </div>
//           <div className="text-lg font-semibold mt-2">1,071,760</div>
//           <button className="w-full bg-green-500 text-white py-2 rounded-md mt-2">
//             Book now
//           </button>
//         </div>

//         <div className="border-b py-4">
//           <div className="flex justify-between items-center mb-2">
//             <div className="text-lg font-semibold">KLM</div>
//             <div className="text-sm text-gray-600">Flight KL 1004</div>
//           </div>
//           <div className="grid grid-cols-4 gap-4 text-sm text-gray-700">
//             <div>12kg</div>
//             <div>23kg</div>
//             <div>7 Mar 25 10:00</div>
//             <div>London Heathrow</div>
//           </div>
//           <div className="text-sm text-gray-600 mt-2">
//             10h15 Duration | 1 Stop (AMS)
//           </div>
//           <div className="grid grid-cols-4 gap-4 text-sm text-gray-700 mt-2">
//             <div>7 Mar 25 21:00</div>
//             <div>Lagos, Murata Muhammed International Airport</div>
//           </div>
//         </div>

//         <div className="text-sm text-gray-600 mt-4">
//           Please check entry requirements of transit & destination country
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightSearchCard;
