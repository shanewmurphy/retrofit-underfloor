"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const data = [
  {
    id: 1,
    Question: "What services do you offer?",
    Answer:
      "We offer a comprehensive range of plumbing services, including installation, repair, and maintenance for residential, commercial, and industrial plumbing systems. Our services cover everything from leak detection and repair to water heater installation and drain cleaning.",
  },
  {
    id: 2,
    Question: "Do you offer emergency plumbing services?",
    Answer:
      "Yes, we provide 24/7 emergency plumbing services to address urgent issues such as burst pipes, and overflowing toilets. Our team is available around the clock to respond to plumbing emergencies and provide prompt assistance when you need it most.",
  },
  {
    id: 3,
    Question: "Are your technicians licensed and insured?",
    Answer:
      "Yes, our technicians are fully licensed, insured, and trained to handle a wide range of plumbing issues. You can trust that our team has the expertise and qualifications to provide high-quality workmanship and exceptional service on every job.",
  },
  {
    id: 4,
    Question: "How can I schedule a service appointment?",
    Answer:
      "Scheduling a service appointment is easy! You can contact us via phone, to request service.",
  },
  {
    id: 5,
    Question: "What areas do you serve?",
    Answer:
      "We proudly serve customers throughout the southeast of Ireland, Waterford, Kilkenny, Carlow, Wexford. Whether you're located in a city, town, or rural area, we're committed to providing reliable plumbing services to residents and businesses across our service area",
  },
];
export default function FAQPlumbing() {
  return (
    <div className="mb-24 mt-8 sm:pb-48">
      <div className="lg:w-10/12 sm:w-11/12 mx-auto">
        <div>
          {data.map((faq) => (
            <div key={faq.id}>
              <div>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex py-6 px-6 mb-4 lg:text-sm md:text-sm sm:text-sm items-center w-full lg:bg-zinc-100/50 sm:bg-zinc-100/70 rounded-lg  justify-between text-left font-medium text-mygrey hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                        <div>{faq.Question}</div>
                        <div>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-7 w-7 text-mygrey`}
                          />
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-4 pt-2 text-sm font-medium text-lightgrey">
                        {faq.Answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
