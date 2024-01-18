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
        <button className="font-bold" onClick={() => setOpen(true)}>
          Menu
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
                            <Link href="/installation">
                              <button className="text-2xl font-bold mb-4">
                                Installation
                              </button>
                            </Link>
                          </div>
                          <div>
                            <Link href="/benefits">
                              <button className="text-2xl font-bold mb-4">
                                Benefits
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
                            <Link href="/installation">
                              <button className="text-2xl font-bold mb-4">
                                Contact Us
                              </button>
                            </Link>
                          </div>
                          <div className="mt-12">
                            <h5 className="font-medium text-lg">Call Damien</h5>
                            <p className="font-bold mt-1 text-2xl">
                              087 - 7618255
                            </p>
                            <p className="mt-1">info@gmail.com</p>
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
