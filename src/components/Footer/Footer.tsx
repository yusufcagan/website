import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-sm text-gray-600 hover:text-gray-300"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm text-gray-600 hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © 2023 My Website. Yusuf ÇAĞAN.
            </p>
            <p className="text-sm text-gray-600">yusufcagan@outlook.com.tr</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
