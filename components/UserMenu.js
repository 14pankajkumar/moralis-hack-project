import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useMoralis } from "react-moralis";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserMenu = () => {
  const { isAuthenticated, user, logout } = useMoralis();
  return (
    <Menu as="div" className={`${!isAuthenticated && "ml-3 relative hidden"}`}>
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
                onClick={() => router.push(`/profile/${user.getUsername()}`)}
                className={classNames(
                  active
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700",
                  "block px-4 py-2 rounded-md text-sm text-white cursor-pointer truncate"
                )}
              >
                {user?.get("ethAddress").slice(0, 5)}...
                {user?.get("ethAddress").slice(-4)}
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
  );
};

export default UserMenu;
