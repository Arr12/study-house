import React from "react";
import { ArrowRight } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="px-8 md:px-10 bg-white dark:bg-gray-800 mx-auto mt-5">
      <div className="w-full border-y dark:border-gray-800 border-[#DDDDDD]">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 dark:border-gray-800 border-[#DDDDDD]">
            <div className="sm:hidden xl:block mb-6 sm:mb-0">
              <a href="/">
                <img
                  src="/images/1.png"
                  srcSet="/images/1.png"
                  className="w-24 xl:w-28"
                  alt="Invitation Panel Logo"
                  width={"auto"}
                  height={"auto"}
                />
              </a>
            </div>
          </div>
          <div className="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r dark:border-gray-800 border-[#DDDDDD]">
            <ul className="flex flex-col space-y-4 text-black dark:text-white">
              <a href="/about">About Us</a>
              {/* <a href="/career">Careers</a> */}
            </ul>
          </div>
          <div className="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 dark:border-gray-800 border-[#DDDDDD]">
            <ul className="flex flex-col space-y-4 text-black dark:text-white">
              <a href="/contact">Contact Us</a>
              <a href="/terms">Terms and Condition</a>
              <a href="/privacy">Privacy Policy</a>
            </ul>
          </div>
          <div className="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t dark:border-gray-800 border-[#DDDDDD]">
            <h5 className="text-sm font-medium text-[#666666] dark:text-white focus:outline-none focus:shadow-outline">
              Newsletter
            </h5>
            <p className="text-sm text-[#666666] dark:text-white focus:outline-none focus:shadow-outline">
              Never miss anything crypto when <br className="sm:hidden" />
              you're on the go
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                placeholder="Enter your email"
              />
              <button className="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300">
                <ArrowRight size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-4 text-center text-sm text-[#666666] dark:text-white hover:text-gray-900">
        Copyright 2024 &copy; All rights reserved
      </div>
    </footer>
  );
}
