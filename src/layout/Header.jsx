// LayoutHeader.jsx
import React from "react";
import { Link } from "react-router-dom";

function LayoutHeader() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Beranda
              </Link>
              <Link
                to="/add"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Tambah
              </Link>
              <Link
                to="/archieve"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Arsip
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default LayoutHeader;
