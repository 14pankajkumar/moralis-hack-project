/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from "@headlessui/react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { postModalState } from "../atoms/PostModalAtom";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { isAuthenticated, authenticate } = useMoralis();
  const [open, setOpen] = useRecoilState(postModalState);
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="bg-transparent top-0 z-50 blue-glassmorphism-navbar sticky"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none ${
                    !isAuthenticated && "hidden"
                  }`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div
                  className="flex-shrink-0 flex items-center cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>

                {/* Middle search input field */}
                <div className="hidden md:flex justify-center">
                  <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                      <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <AiOutlineSearch className="text-gray-400" />
                      </div>
                      <input
                        className="bg-transparent blue-glassmorphism-search text-white block w-full h-10 pl-10 sm:text-sm border-gray-300 outline-none rounded-md"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* menu */}
              <div className={`${!isAuthenticated && "hidden"}`}>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <AiOutlinePlusCircle
                      onClick={() => setOpen(true)}
                      fontSize={25}
                      className="text-white md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* login button */}
              <button
                className={`items-center my-5 w-20 bg-[#2952e3] p-3 rounded-lg font-semibold cursor-pointer hover:bg-[#2546b] text-white ${
                  isAuthenticated ? "hidden" : ""
                }`}
                onClick={authenticate}
              >
                LogIn
              </button>

              {/* user menu */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <UserMenu />
              </div>
            </div>
          </div>

          {/* slider menu */}
          <Disclosure.Panel className="sm:hidden relative">
            <div
              className="z-10 fixed -top-0 -right-0 p-3 w-[60vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <div className="flex justify-center">
                <div className="max-w-xs">
                  <div className="relative mt-1 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                      <AiOutlineSearch className="text-gray-400" />
                    </div>
                    <input
                      className="bg-transparent blue-glassmorphism-search text-white block w-full h-10 pl-10 sm:text-sm border-gray-300 outline-none rounded-md"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>

              <div onClick={() => setOpen(true)}>
                <Disclosure.Button
                  as="p"
                  className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  <AiOutlinePlusCircle
                    fontSize={25}
                    className="text-white md:inline-flex cursor-pointer mr-1"
                  />
                  Post
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
