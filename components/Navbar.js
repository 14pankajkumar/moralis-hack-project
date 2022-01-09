/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineSetting
} from "react-icons/ai";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { postModalState } from "../atoms/PostModalAtom";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { logout, user, isAuthenticated, authenticate } = useMoralis();
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
                <Menu
                  as="div"
                  className={`${!isAuthenticated && "ml-3 relative hidden"}`}
                >
                  <div>
                    <Menu.Button className="relative bg-gray-800 flex text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full bg-white"
                        src={`https://avatars.dicebear.com/api/pixel-art/${user?.getUsername()}.svg`}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md blue-glassmorphism shadow-lg py-2 px-2 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            onClick={() =>
                              router.push(`/profile/${user.getUsername()}`)
                            }
                            className={classNames(
                              active
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700",
                              "block px-4 py-2 rounded-md text-sm text-white cursor-pointer truncate"
                            )}
                          >
                            {user?.get("ethAddress").slice(0,5)}...{user?.get("ethAddress").slice(-4)}
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700",
                              "px-4 py-2 rounded-md text-sm text-white cursor-pointer flex items-center"
                            )}
                          >
                            <AiOutlineSetting className="h-6 w-6 " />
                            <p className="mx-1">Settings</p>
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={logout}
                            className={classNames(
                              active
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700",
                              "px-4 py-2 rounded-md text-sm text-white cursor-pointer flex items-center"
                            )}
                          >
                            <AiOutlineLogout className="h-6 w-6 " />
                            <p className="mx-1">Sign out</p>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
