import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function LogIn() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("India (+91)");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { mobileNumber, selectedCountry });
  };

  const admissionSteps = [
    {
      step: 1,
      title: "Create account",
      icon: "👤",
    },
    {
      step: 2,
      title: "Find the best School",
      icon: "🖥️",
    },
    {
      step: 3,
      title: "Pay Admission Form Fees",
      icon: "💳",
    },
    {
      step: 4,
      title: "Fill form and Documents",
      icon: "📝",
    },
    {
      step: 5,
      title: "Submit and Apply",
      icon: "✅",
    },
  ];

  return (
    <div>
      <Header/>
    <div className="min-h-screen bg-gradient-to-b from-[#673AB7] to-[#9C27B0]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative Waves */}
        <div className="absolute inset-0">
           <div className="absolute top-0 left-0 right-0 h-20 bg-[#E1BEE7] transform -skew-y-3"></div> 
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#E1BEE7] transform skew-y-3"></div>
        </div>

        <div className="relative max-w-8xl mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side Illustration */}
            <div className="hidden lg:block w-1/4"></div>

            {/* Center Form */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <ChevronLeft className="h-5 w-5 text-gray-500" />
                <span className="ml-2 text-gray-600">School Search</span>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-4">
                  APPLY TO THE BEST SCHOOLS
                </h1>
                <div className="flex justify-center mb-6">
                  <img
                    src="https://uniformapp.in/images/signup.svg"
                    alt="Students"
                    className="h-[100px]"
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <p className="text-gray-600 mb-4 text-center">
                  Please enter your mobile number
                </p>
                <div className="space-y-4">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option>India (+91)</option>
                    <option>USA (+1)</option>
                    <option>UK (+44)</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#607D8B] text-white py-3 rounded-md hover:bg-[#546E7A] transition-colors"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side Illustration */}
            <div className="hidden lg:block w-1/4"></div>
          </div>
        </div>
      </div>

      {/* Admission Procedure Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Admission Procedure
            <div className="w-48 h-1 bg-purple-600 mx-auto mt-2"></div>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px border-l-2 border-dashed border-purple-300"></div>

            {/* Steps */}
            <div className="space-y-20">
              {admissionSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2 px-8">
                    <div
                      className={`text-xl font-semibold ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      Step {step.step}:
                    </div>
                    <div
                      className={`text-gray-600 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 h-px w-8 bg-purple-300"></div>
                  </div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </div>
  );
}
