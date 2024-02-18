import { Tab } from "@headlessui/react";
import { useState } from "react";
import FAQUnderfloor from "./underfloor-faqs";
import FAQPlumbing from "./plumbing-faq";
export default function AllFAQ() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="w-full py-32">
      <div className="lg:px-24 lg:py-12  md:px-16 md:py-8 sm:px-4 sm:py-8">
        <h3 className="text-center text-5xl text-mygrey font-bold mb-2">
          FAQs
        </h3>
        <p className="text-center font-medium lg:text-lg sm:text-sm text-lightgrey lg:w-[50%] md:w-[70%] sm:w-[80%] mx-auto">
          Find answers to the most common questions about our plumbing service
          and underfloor heating system.
        </p>
      </div>
      <div className="lg:w-9/12 mx-auto">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="xl:w-[45%]lg:w-4/12 md:w-[45%] laptop:w-[35%] sm:w-[70%] mx-auto bg-[#fafafa] px-4 py-3 rounded-xl">
            <Tab.List>
              <div className="flex justify-between">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-neutral-900 shadow-md font-medium text-sm bg-white lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-6 rounded-lg focus:outline-none"
                      : "text-gray-500 font-medium text-sm lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-6  hover:bg-[#f0f0f0] rounded-lg border border-gray-300"
                  }
                >
                  Plumbling
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-neutral-900 shadow-md font-medium text-sm bg-white lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-6 rounded-lg focus:outline-none"
                      : "text-gray-500 font-medium text-sm lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-6 hover:bg-[#f0f0f0] rounded-lg border border-gray-300"
                  }
                >
                  Underfloor
                </Tab>
              </div>
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <FAQPlumbing />
            </Tab.Panel>
            <Tab.Panel>
              <FAQUnderfloor />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
