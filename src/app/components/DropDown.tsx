import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useAuth0 } from "@auth0/auth0-react";

interface DropDownProps {
  items: string[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ items }: DropDownProps) {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <Menu as="div" className="relative inline-block text-right z-[99] md:mr-10">
      <div>
        <Menu.Button className="inline-flex w-[130px]  justify-center gap-x-1.5 text-[12px] sm:text-[14px] md:text-[16px] px-0 p2-2  text-white font-poppins ">
          My account 
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
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
        <Menu.Items className="absolute right-13 font-poppins  mt-2 w-24 sm:w-44 md:w-56 origin-top-right rounded-md z-[99] bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {isAuthenticated ? (
              <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  className={classNames(
                    active
                      ? "bg-secondary text-gray-900 w-full"
                      : "text-gray-300 w-full",
                    "block px-4 py-2 text-[12px] sm:text-[14px] md:text-[16px]"
                  )}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
            ) : (
              items.map((item: string) => (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <button
                      onClick={() => loginWithRedirect()}
                      className={classNames(
                        active
                          ? "bg-secondary text-gray-900 w-full"
                          : "text-gray-300 w-full",
                        "block px-4 py-2 text-[12px] sm:text-[14px] md:text-[16px]"
                      )}
                    >
                      {item}
                    </button>
                  )}
                </Menu.Item>
              ))
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
