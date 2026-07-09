import { assets } from "../assets/assets"
import { Link, NavLink } from "react-router-dom"
import React, { useState } from 'react'

function NavBar() {
    const [visible, setVisible] = useState(false);
  return (
    <div className="flex item-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36 cursor-pointer" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-400">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 h-px bg-gray-700 border-none hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col item-center gap-1">
          <p>COLLECTION</p>
          <hr className="-2/4 h-px bg-gray-700 border-none hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col item-center gap-1">
          <p>ABOUT</p>
          <hr className="-2/4 h-px bg-gray-700 border-none hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col item-center gap-1">
          <p>CONTACT</p>
          <hr className="-2/4 h-px bg-gray-700 border-none hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute droupdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 p-4 bg-slate-100 text-gray-400 rounded">
              <p className="cursor-pointer hover:text-black">My Prpfile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5  cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Side Menu for small screen  */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full " : "w-0"}`}
      >
        <div className="flex flex-col text-gray-400 ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 text-gray-900 rotate-180" alt="" />
            <p className="text-gray-900">Back</p>
          </div>
          <Link
            to="/"
            className="py-2 pl-6 border text-gray-400 hover:text-gray-900"
            onClick={() => setVisible(false)}
          >
            Home
          </Link>
          <Link
            to="/collection"
            className="py-2 pl-6 border  text-gray-400 hover:text-gray-900"
            onClick={() => setVisible(false)}
          >
            Collection
          </Link>
          <Link
            to="/about"
            className="py-2 pl-6 border  text-gray400 hover:text-gray-900"
            onClick={() => setVisible(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="py-2 pl-6 border  text-gray-400 hover:text-gray-900"
            onClick={() => setVisible(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar
