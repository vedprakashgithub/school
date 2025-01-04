import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, Search } from "lucide-react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import Footer from "./../components/Footer";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getSchools"
        );
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };
    fetchSchools();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSchools = schools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Search Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-2">School Search</h1>
          <p className="text-gray-600 text-center mb-8">
            Find the right school for your child
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="School Name..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#040f08] focus:border-transparent"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#22c55e] text-white px-6 py-2 hover:bg-[#16a34a] transition-colors border-b-4">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap text-center justify-center gap-[70px]">
            {[
              "Choose City",
              "Choose Board",
              "Choose Type",
              "Hostel Facility",
            ].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 font-bold bg-[#22c55e] border border-[#22c55e] text-[#f7f8f8] hover:bg-[#12582c] hover:text-white transition-colors flex items-center space-x-2"
              >
                {filter}
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schools Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="pb-10 pl-2">
          <Link
            to="/addschool"
            className="bg-[#1b7775] text-white px-4 py-2 hover:bg-[#0e4953] transition-colors"
          >
            Add School
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={`http://localhost:5000/schoolImages/${school.image}`}
                  alt={school.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                  <Search className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1">{school.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{school.address}</p>
                <p className="text-sm text-gray-600 mb-4">{school.city}</p>
                <button className="w-full bg-[#22c55e] text-white py-2 rounded hover:bg-[#16a34a] transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
