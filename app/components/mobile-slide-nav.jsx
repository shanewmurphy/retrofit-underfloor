"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function MobileSlideNav() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <button
          className="font-bold text-lg text-zinc-600 flex items-center"
          onClick={() => setOpen(true)}
        >
          Menu
          {/* <span className="inline-block  pl-2">
            <MenuIcon />
          </span> */}
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-full  text-black hover:text-black focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute rounded-full border-red-500 -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="relative mt-6 flex flex-1 items-center px-4 sm:px-6">
                        <div className="text-center w-3/4 mx-auto">
                          <div>
                            <Link href="/">
                              <button className="text-2xl font-bold mb-4">
                                Home
                              </button>
                            </Link>
                          </div>
                          <div>
                            <Link href="/underfloor-heating">
                              <button className="text-2xl font-bold mb-4">
                                Underflooor Heating
                              </button>
                            </Link>
                          </div>
                          <div>
                            <Link href="/about-us">
                              <button className="text-2xl font-bold mb-4">
                                About Us
                              </button>
                            </Link>
                          </div>
                          <div>
                            <Link href="/contact-us">
                              <button className="text-2xl font-bold mb-4">
                                Contact Us
                              </button>
                            </Link>
                          </div>
                          <div className="mt-12">
                            <h5 className="font-medium text-lg">Call Liam</h5>
                            <p className="font-bold mt-1 text-2xl">
                              087 - 2605262
                            </p>
                            <h5 className="font-medium text-lg mt-6">
                              Call Damien
                            </h5>
                            <p className="font-bold mt-1 text-2xl">
                              087 - 7618255
                            </p>
                            {/* <p className="mt-1">info@gmail.com</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
function MenuIcon() {
  return (
    <svg
      width="25"
      height="15"
      viewBox="0 0 35 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 16.4807C35 15.6385 34.3003 14.9615 33.4354 14.9615H1.55491C0.687561 14.9615 0 15.6409 0 16.4807C0 17.3324 0.68999 18 1.55491 18H33.4354C34.3027 18 35 17.3324 35 16.4807Z"
        fill="#52525B"
      />
      <path
        d="M1.55491 10.5193H33.4354C34.3027 10.5193 35 9.85165 35 8.98821C35 8.15781 34.3003 7.48074 33.4354 7.48074H1.55491C0.687561 7.48074 0 8.16017 0 8.98821C0 9.85165 0.687561 10.5193 1.55491 10.5193Z"
        fill="#52525B"
      />
      <path
        d="M1.55491 3.0291H33.4354C34.3027 3.0291 35 2.3709 35 1.50983C35 0.679422 34.3003 0 33.4354 0H1.55491C0.687561 0 0 0.679422 0 1.50983C0 2.3709 0.687561 3.0291 1.55491 3.0291Z"
        fill="#52525B"
      />
    </svg>
  );
}
