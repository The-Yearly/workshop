"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FormData } from "../utils/types";
import { ToastContainer, toast } from "react-toastify";
export default function Component() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    roll: "",
    checkBox: false,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    setIsDisabled(
      !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.roll.trim() ||
        !formData.checkBox,
    );
  }, [formData]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name != "checkBox") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: !formData.checkBox });
    }
  };
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidRollNumber = (roll: string): boolean => {
    const rollRegex = /^am\.[a-z]{2}\.[a-z0-9]{10}$/;
    return rollRegex.test(roll);
  };
  const validateForm = () => {
    const validEmail = isValidEmail(formData.email);
    const validRoll = isValidRollNumber(formData.roll);
    if (formData.name !== "" && validEmail && validRoll) {
    } else {
      if (formData.name === "") {
        toast.warn("Please enter your name.");
      } else if (!validEmail) {
        toast.warn("Enter Proper Email Id");
      } else if (!validRoll) {
        toast.warn("Enter Proper Roll Number");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f]">
      <ToastContainer />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mx-10">
          <form className="space-y-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-8">Register</h1>
            </div>

            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={changeValue}
                className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Admission Number:-"
                name="roll"
                value={formData.roll}
                onChange={changeValue}
                className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData["email"]}
                onChange={changeValue}
                className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>

            <div className="flex items-start space-x-3 mt-6">
              <input
                type="checkbox"
                id="acknowledgment"
                name="checkBox"
                checked={formData.checkBox}
                onChange={changeValue}
                className="w-5 h-5 mt-0.5 accent-pink-500"
              />
              <label
                htmlFor="acknowledgment"
                className="text-sm text-gray-300 leading-relaxed"
              >
                By signing up for this workshop, I acknowledge that
                participation does not grant me membership or free entry into
                amFOSS
              </label>
            </div>
          </form>
          <div className="space-y-6 w-full mt-12 flex flex-col h-full items-center justify-center">
            <div className="w-full space-y ">
              <div className="bg-black/20 rounded-lg p-6 border border-gray-700">
                <table className="w-full">
                  <thead>
                    <tr className="text-white font-semibold border-b border-gray-600">
                      <th className="text-left pb-2">Name</th>
                      <th className="text-left pb-2">Price</th>
                      <th className="text-left pb-2">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="py-2">seat x 1</td>
                      <td className="py-2">₹1499 x 1</td>
                      <td className="py-2">₹1499</td>
                    </tr>
                    <tr>
                      <td className="py-2">taxes</td>
                      <td className="py-2">₹100</td>
                      <td className="py-2">₹100</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-gray-600">
                      <td className="pt-4 text-white font-semibold text-lg">
                        Total Cost
                      </td>
                      <td></td>
                      <td className="pt-4 text-white font-semibold text-lg">
                        ₹1499
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="flex mt-8 justify-center ">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  disabled={isDisabled}
                  onClick={validateForm}
                  className="relative text-white font-bold py-4 px-12 rounded-lg text-xl overflow-hidden disabled:cursor-not-allowed"
                >
                  <span
                    className={`
      absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 
      transition-opacity duration-500 ease-in-out
      ${isDisabled ? "opacity-0" : "opacity-100"}
    `}
                  />
                  <span
                    className={`
      absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 
      transition-opacity duration-500 ease-in-out
      ${isDisabled ? "opacity-100" : "opacity-0"}
    `}
                  />
                  <span className="relative z-10">Register</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
