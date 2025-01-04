import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link, Links } from "react-router-dom"; // Import Link from react-router-dom

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#5F4BA9] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center text-white">
            <Mail className="h-4 w-4 mr-2" />
            <a
              href="mailto:mail@uniformapp.in"
              className="text-sm hover:text-gray-200"
            >
              mail@uniformapp.in
            </a>
          </div>
          <div className="flex items-center space-x-2 pr-10">
            <a
              href="#"
              className="text-white bg-blue-800 p-1 hover:text-gray-200"
            >
              <Facebook className="h-4  w-4" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-white bg-blue-500 p-1 hover:text-gray-200"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-white bg-pink-500 p-1 hover:text-gray-200"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-white bg-red-600 p-1 hover:text-gray-200"
            >
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-gradient-to-b from-[#5F4BA9] to-[#673AB7] pt-10 pb-5 px-4 shadow-md">
        <div className="container max-w-7xl mx-auto">
          <nav className="flex items-center justify-between">
            {/* Logo on the left */}
            <Link to="/">
              <div className="flex-shrink-0">
                <img src="/logo.png" alt="UniForm" className="h-14 pl-[40px]" />
              </div>
            </Link>

            {/* Desktop Navigation and Buttons on the right */}
            <div className="hidden md:flex items-center font-bold space-x-8 ml-auto pr-10">
              {/* Desktop Navigation Links */}
              <Link to="#" className="text-white hover:text-gray-200">
                Common Admissions
              </Link>
              <Link to="#" className="text-white hover:text-gray-200">
                School Portal
              </Link>
              <Link to="#" className="text-white hover:text-gray-200">
                Find Schools
              </Link>
              <Link to="#" className="text-white hover:text-gray-200">
                Blog
              </Link>

              {/* Desktop Buttons */}
              <div className="flex items-center space-x-4">
                <Link to="/login" className=" text-white px-4 py-2">
                  Log in
                </Link>

                {/* Sign Up Button as a Link to /signup page */}
                <Link
                  to="/signup"
                  className="bg-[#4caf50] text-white px-4 py-3 hover:bg-[#45a049] transition-colors"
                >
                  Sign Up
                </Link>

                <button className="text-white hover:text-gray-200">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-gray-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden mt-4 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="#"
                className="text-white hover:text-gray-200"
                onClick={toggleMenu}
              >
                Common Admissions
              </Link>
              <Link
                to="#"
                className="text-white hover:text-gray-200"
                onClick={toggleMenu}
              >
                School Portal
              </Link>
              <Link
                to="#"
                className="text-white hover:text-gray-200"
                onClick={toggleMenu}
              >
                Find Schools
              </Link>
              <Link
                to="#"
                className="text-white hover:text-gray-200"
                onClick={toggleMenu}
              >
                Blog
              </Link>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <Link
                  to="/login"
                  className=" text-white px-4 py-2 "
                  onClick={toggleMenu}
                >
                  Log in
                </Link>
                {/* Sign Up Button in Mobile Menu */}
                <Link
                  to="/signup"
                  className="bg-[#4caf50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-colors"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
                <button className="text-white hover:text-gray-200 flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
