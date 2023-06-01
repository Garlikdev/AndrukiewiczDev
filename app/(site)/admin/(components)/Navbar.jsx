"use client"

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <div className='flex flex-col h-full w-64  bg-gradient-to-b from-slate-900 to-slate-700 overflow-x-hidden overflow-y-scroll scroll'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-gray-900 hover:underline font-bold'>
            Obsługa sklepu
            <ChevronDownIcon className='-mr-1 h-5 w-5' aria-hidden='true' />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='relative left-2 z-10 w-full border-l border-elo/50 px-2'>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? "underline" : "",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? "underline" : "",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? "underline" : "",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
              <form method='POST' action='#'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type='submit'
                      className={classNames(
                        active ? "underline" : "",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Navbar
