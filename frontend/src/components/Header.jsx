import React, { useState } from "react";
import { ClearAll, Close, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Header({ setLoading, active, setActive }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 py-3 px-3 md:px-10 flex flex-row items-center justify-between navbar bg-white z-20 w-full">
      <img
        src="/images/1.png"
        alt="Logo"
        width={"auto"}
        height={"auto"}
        className="w-16 h-16"
      />
      <div
        className={`${
          open
            ? "absolute right-0 bg-gray-100 w-60 md:w-auto justify-start h-screen top-0"
            : "hidden"
        } lg:flex lg:flex-row`}
      >
        <Close
          className="flex md:!hidden p-1 m-2"
          onClick={() => setOpen(false)}
        />
        <div className="flex flex-col px-5 lg:p-0 lg:flex-row lg:items-center">
          <Link
            onClick={() => {
              setLoading();
              setActive("");
            }}
            className={`${
              active === "" ? "active" : ""
            } my-1 md:my-0 mr-5 text-sm`}
            to=""
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setLoading();
              setActive("about");
            }}
            className={`${
              active === "about" ? "active" : ""
            } my-1 md:my-0 mr-5 text-sm`}
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => {
              setLoading();
              setActive("contact");
            }}
            className={`${
              active === "contact" ? "active" : ""
            } my-1 md:my-0 mr-5 text-sm`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className={`flex flex-row px-2 lg:p-0 items-center`}>
        <ClearAll
          className="flex lg:!hidden mr-3"
          onClick={() => setOpen(!open)}
        />
        <Link className="my-1 md:my-0 lg:mr-3" to="/login">
          <Login className="mr-2 !text-sm" />
        </Link>
      </div>
    </div>
  );
}
