import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, UserIcon } from "@heroicons/react/20/solid"
import {
  Cog6ToothIcon,
  LockClosedIcon,
  MapPinIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline"
import { signOut } from "next-auth/react"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function NavDropdown({ session }) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex items-center w-full justify-center rounded-full bg-white dark:bg-neutral-900 dark:text-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-900'>
          <UserIcon className='w-6 h-6' aria-hidden='true' />
          <ChevronDownIcon
            className='-mr-1 h-5 w-5 text-neutral-500 dark:text-neutral-100'
            aria-hidden='true'
          />
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
        {session?.user ? (
          <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-neutral-100 dark:divide-neutral-800 rounded-md bg-white dark:bg-neutral-900 dark:text-white shadow-lg ring-1 ring-neutral-200 dark:ring-black ring-opacity-5'>
            <div className='py-1'>
              {session?.user?.role === "ADMIN" && (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='/admin'
                      className={classNames(
                        active
                          ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                          : "text-neutral-700 dark:text-white",
                        "flex flex-row gap-2 items-center px-4 py-2 text-sm"
                      )}
                    >
                      <LockClosedIcon className='w-6 h-6' aria-hidden='true' />
                      Admin panel
                    </Link>
                  )}
                </Menu.Item>
              )}
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/konto'
                    className={classNames(
                      active
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                        : "text-neutral-700 dark:text-white",
                      "flex flex-row gap-2 items-center px-4 py-2 text-sm"
                    )}
                  >
                    <ShoppingBagIcon className='w-6 h-6' aria-hidden='true' />
                    Zamówienia
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/konto/dane'
                    className={classNames(
                      active
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                        : "text-neutral-700 dark:text-white",
                      "flex flex-row gap-2 items-center px-4 py-2 text-sm"
                    )}
                  >
                    <MapPinIcon className='w-6 h-6' aria-hidden='true' />
                    Dane do zamówień
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/konto/ustawienia'
                    className={classNames(
                      active
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                        : "text-neutral-700 dark:text-white",
                      "flex flex-row gap-2 items-center px-4 py-2 text-sm"
                    )}
                  >
                    <Cog6ToothIcon className='w-6 h-6' aria-hidden='true' />
                    Ustawienia konta
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type='button'
                    onClick={signOut}
                    className={classNames(
                      active
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                        : "text-neutral-700 dark:text-white",
                      "block px-4 py-2 text-sm w-full"
                    )}
                  >
                    Wyloguj
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        ) : (
          <Menu.Items className='absolute items-center right-0 px-4 py-4 z-10 mt-2 w-56 origin-top-right divide-y divide-neutral-100 dark:divide-neutral-800 rounded-md bg-white dark:bg-neutral-900 shadow-highlight'>
            <div className='py-1 flex flex-col items-center justify-center'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/logowanie'
                    className={classNames(
                      active ? "bg-red-600" : "",
                      "flex flex-row gap-2 items-center px-4 py-2 text-sm rounded-full bg-elo w-full text-center justify-center"
                    )}
                  >
                    Zaloguj się
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                <span className='flex flex-row gap-2 items-center px-4 py-2 text-sm'>
                  Nie masz konta?
                </span>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/rejestracja'
                    className={classNames(
                      active ? "bg-elo" : "text-neutral-700 dark:text-white",
                      "flex flex-row gap-2 items-center px-4 py-2 text-sm rounded-full border-elo border"
                    )}
                  >
                    Załóż konto
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  )
}
