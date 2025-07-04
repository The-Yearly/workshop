"use client";
import { useState } from "react";
export default function Login() {
  const [seatsNo, setSeastsNo] = useState(1);
  const changeSeats = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seats = parseInt(e.target.value);
    if (seats < 1) {
      setSeastsNo(1);
    } else {
      setSeastsNo(seats);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4d0929] via-black to-[#3c1c3f] px-4 py-10 text-white font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md">
          <div className="flex flex-col items-center space-y-8">
            <p className="text-3xl md:text-5xl font-Lalezar text-gray-200">
              Register
            </p>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Admission Number"
              className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="number"
              value={seatsNo}
              onChange={changeSeats}
              placeholder="Number of Seats"
              className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md w-full">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-3xl md:text-5xl font-Lalezar text-gray-200">
              Bill
            </p>

            <div className="grid grid-cols-3 w-full border-b border-gray-500 pb-2 text-sm md:text-base text-gray-300 font-semibold text-center">
              <p>Item</p>
              <p>Details</p>
              <p>Total</p>
            </div>

            <div className="grid grid-cols-3 w-full text-sm md:text-base text-gray-200 text-center py-2 border-b border-gray-800">
              <p>Seats × {seatsNo}</p>
              <p>$ 250 × {seatsNo}</p>
              <p>$ {seatsNo * 250}</p>
            </div>
            <div className="grid grid-cols-3 w-full text-sm md:text-base text-gray-200 text-center py-2 border-b border-gray-800">
              <p>Taxes</p>
              <p>-</p>
              <p>$ 5</p>
            </div>

            <div className="flex justify-center w-full text-sm mt-2 mb-2  md:text-base text-gray-100 font-bold">
              <p className="col-span-2  pr-4">Total Cost:</p>
              <p className="text-green-400">$ {250 * seatsNo + 5}</p>
            </div>

            <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md text-white font-bold">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
