"use client"

import React, { useContext } from "react"

import CartContext from "@context/CartContext"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const Cart = () => {
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext)

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1
    const item = { ...cartItem, quantity: newQty }

    addItemToCart(item)
  }

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1
    const item = { ...cartItem, quantity: newQty }

    if (newQty <= 0) return

    addItemToCart(item)
  }

  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  // const taxAmount = (amountWithoutTax * 0.15).toFixed(2)

  // const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2)

  return (
    <>
      <section className='py-2 sm:py-4'>
        <div className='container max-w-screen-xl mx-auto px-4'>
          <h2 className='text-xl font-semibold mb-2'>
            Koszyk ({cart?.cartItems?.length || 0})
          </h2>
        </div>
      </section>

      {cart?.cartItems?.length > 0 && (
        <section>
          <div className='container max-w-screen-xl mx-auto px-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              <main className='md:w-3/4'>
                <article className='bg-neutral-100 shadow-highlight dark:bg-neutral-800 rounded p-3 lg:p-5'>
                  {cart?.cartItems?.map((cartItem) => (
                    <div
                      key={cartItem.id}
                      className='flex flex-wrap lg:flex-row gap-2 py-2 last:mb-0 border-b border-neutral-200 dark:border-neutral-700 last:border-0 items-center'
                    >
                      <div className='w-full lg:w-2/5 xl:w-2/4'>
                        <figure className='flex gap-2 items-center'>
                          <div>
                            <div className='flex items-center relative w-16 h-16 rounded border border-neutral-200 dark:border-neutral-700 overflow-hidden'>
                              <Image
                                fill
                                className='object-contain'
                                src={cartItem.image}
                                alt={cartItem.name}
                                sizes='(min-width: 60em) 10vw,
                    (min-width: 28em) 15vw,
                    25vw'
                              />
                            </div>
                          </div>
                          <figcaption className='ml-3 flex flex-col gap-2'>
                            <a
                              href='#'
                              className='hover:text-neutral-500 hover:underline'
                            >
                              {cartItem.name}
                            </a>
                            {cartItem?.fullName?.length > 0 ? (
                              <div className='text-xs px-2 py-1 rounded-md shadow-highlight bg-neutral-200 dark:bg-neutral-900'>
                                <span className='font-medium text-sm'>
                                  Personalizacja
                                </span>
                                <div>
                                  Imię i nazwisko:{" "}
                                  <p className='font-medium underline'>
                                    {cartItem.fullName}
                                  </p>
                                </div>
                                <div>
                                  Numer zawodnika:{" "}
                                  <p className='font-medium underline'>
                                    {cartItem.playerNumber}
                                  </p>
                                </div>
                              </div>
                            ) : null}
                          </figcaption>
                        </figure>
                      </div>
                      <div className='flex items-center text-2xl text-neutral-900 dark:text-white'>
                        <div>
                          <label htmlFor='Quantity' className='sr-only'>
                            Ilość
                          </label>

                          <div className='flex items-center gap-1'>
                            <button
                              type='button'
                              className='w-10 h-10 leading-10 transition hover:opacity-75 disabled:opacity-0'
                              onClick={() => decreaseQty(cartItem)}
                              disabled={cartItem.quantity <= 1}
                            >
                              -
                            </button>

                            <input
                              type='number'
                              id='Quantity'
                              value={cartItem.quantity}
                              readOnly
                              className='h-10 w-16 rounded border-neutral-200 focus:border-elo dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-900 text-center [-moz-appearance:_textfield] sm:text-xl [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                            />

                            <button
                              type='button'
                              className='w-10 h-10 leading-10 transition hover:opacity-75'
                              onClick={() => increaseQty(cartItem)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='flex items-start flex-col'>
                        <p className='font-semibold not-italic'>
                          {cartItem.price * cartItem.quantity.toFixed(2)} zł
                        </p>
                        <small className='text-neutral-400'>
                          {" "}
                          {cartItem.price} zł / za sztukę{" "}
                        </small>
                      </div>
                      <div className='flex-auto'>
                        <div className='float-right'>
                          <a
                            className='px-4 py-2 inline-block text-red-700 bg-neutral-100 dark:bg-neutral-900 shadow-highlight rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-700 cursor-pointer'
                            onClick={() => deleteItemFromCart(cartItem?.id)}
                          >
                            Usuń
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </article>
              </main>
              <aside className='md:w-1/4'>
                <article className='shadow-highlight bg-neutral-100 dark:bg-neutral-800 rounded p-3 lg:p-5'>
                  <ul className='mb-5'>
                    <li className='text-lg font-bold flex justify-between'>
                      <span>Łączna kwota</span>
                      <span>{amountWithoutTax} zł</span>
                    </li>
                  </ul>

                  <a className='px-4 py-3 mb-2 flex items-center gap-4 w-full justify-center text-center shadow-highlight bg-green-600 rounded-md hover:bg-green-700 cursor-pointer'>
                    Przejdź do dostawy <ArrowRightIcon className='w-4 h-4' />
                  </a>

                  <Link
                    href='/'
                    className='px-4 py-3 inline-block w-full text-center text-green-600 bg-white dark:bg-neutral-900 shadow-highlight rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-700'
                  >
                    Powrót do sklepu
                  </Link>
                </article>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Cart
