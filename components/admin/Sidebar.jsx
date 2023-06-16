"use client"

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import Image from "next/image"
import {
  CubeIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import ThemeSwitcher from "@components/ThemeSwitcher"

const Sidebar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <aside className='flex flex-col fixed h-full'>
      <div className='h-16 items-center flex px-4 bg-[#4a456d]'>
        <Image
          src='/assets/images/logo.png'
          alt='logo ELO Pokrowce'
          width={75}
          height={75}
          className='object-contain p-2'
        />
        <ThemeSwitcher />
      </div>
      <div className='bg-gradient-to-b from-[#4a456d] to-indigo-950 flex flex-col h-full w-64 px-4 py-2'>
        <Menu as='div' className='relative inline-block text-left text-white'>
          <>
            <Menu.Button className='flex flex-row items-center w-full gap-x-1.5 px-3 py-2 font-bold pointer-events-none'>
              <ShoppingBagIcon className='h-5 w-5' aria-hidden='true' />
              Zamówienia
            </Menu.Button>
            <Transition as={Fragment} show={true}>
              <Menu.Items className='relative left-2 z-10 w-full border-l border-slate-600 px-2'>
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
                        Zamówienia
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
                        Nowe
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
                        W trakcie realizacji
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
                        Przesyłki
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        </Menu>
        <Menu as='div' className='relative inline-block text-left text-white'>
          <>
            <div className='flex flex-row w-full items-center'>
              <div className='flex flex-row w-full items-center gap-x-1.5 px-3 py-2 font-bold'>
                <CubeIcon className='h-5 w-5' aria-hidden='true' />
                <p>Produkty</p>
              </div>
              <Link
                href='/admin/products/new'
                title='Dodaj produkt'
                aria-label='Dodaj produkt'
              >
                <PlusCircleIcon className='w-6 h-6 hover:bg-neutral-500 dark:hover:bg-neutral-800 rounded-full'></PlusCircleIcon>
              </Link>
            </div>
            <Transition as={Fragment} show={true}>
              <Menu.Items className='relative left-2 z-10 w-full border-l border-slate-600 px-2'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='/admin/products'
                        className={classNames(
                          active ? "underline" : "",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Produkty
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='/admin/categories'
                        className={classNames(
                          active ? "underline" : "",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Kategorie
                      </Link>
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
                        Warianty
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        </Menu>
        <Menu as='div' className='relative inline-block text-left text-white'>
          <>
            <Menu.Button className='flex flex-row w-full items-center gap-x-1.5 px-3 py-2 pointer-events-none font-bold'>
              <UserIcon className='h-5 w-5' aria-hidden='true' />
              Klienci
            </Menu.Button>
            <Transition as={Fragment} show={true}>
              <Menu.Items className='relative left-2 z-10 w-full border-l border-slate-600 px-2'>
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
                        Klienci
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
                        Newsletter
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        </Menu>
      </div>
    </aside>
  )
}

export default Sidebar
