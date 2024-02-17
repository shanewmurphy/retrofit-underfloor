import { Tab } from "@headlessui/react";
import { useState } from "react";
import FAQUnderfloor from "./underfloor-faqs";
export default function AllFAQ() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="w-full py-32">
      <div className="lg:w-9/12 mx-auto">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="lg:w-4/12 md:w-6/12 sm:w-8/12 mx-auto bg-[#f8f8f6] px-4 py-3 rounded-xl">
            <Tab.List>
              <div className="flex justify-between">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-neutral-900 shadow-md font-medium text-sm bg-white lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-4 rounded-lg focus:outline-none"
                      : "text-gray-500 font-medium text-sm lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-4  hover:bg-[#f0f0f0] rounded-lg border border-gray-300"
                  }
                >
                  Plumbling
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-neutral-900 shadow-md font-medium text-sm bg-white lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-4 rounded-lg focus:outline-none"
                      : "text-gray-500 font-medium text-sm lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-4 hover:bg-[#f0f0f0] rounded-lg border border-gray-300"
                  }
                >
                  Underfloor
                </Tab>
              </div>
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <FAQUnderfloor />
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
