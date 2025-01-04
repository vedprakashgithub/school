import React from "react";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-gradient-to-br from-[#4267B2] to-[#673AB7] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-200 mb-4">
              Get updated about admission forms, deadlines and articles to help
              you through the process.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Enter email here.."
                className="flex-1 bg-transparent border border-white/30 rounded-l px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-[#00BCD4] p-2 rounded-r hover:bg-[#00ACC1] transition-colors"
              >
                <Send className="h-6 w-6" />
              </button>
            </form>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Schools in India
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Other Schools in India
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Colleges in India
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Advertise With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Common Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Edunify India
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  CGPA Converter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 ">
          <Link to="/">
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="UniForm" className="h-14" />
          </div>
          </Link>
          <div className="text-sm text-gray-200">
            Copyright : Uniform Ventures Pvt. Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
}
