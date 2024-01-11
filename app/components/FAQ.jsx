"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const data = [
  {
    id: 1,
    Question: "Is underfloor heating suitable for both new and existing homes?",
    Answer:
      "While it's easier to install underfloor heating in new constructions, retrofitting is possible for existing homes. The feasibility depends on factors like floor construction and available space",
  },
  {
    id: 2,
    Question: "What are the advantages of underfloor heating?",
    Answer:
      " Underfloor heating provides even heat distribution, eliminates cold spots, is energy-efficient, and offers increased comfort with no visible radiators or ducts.",
  },
  {
    id: 3,
    Question:
      "Is underfloor heating more energy-efficient than traditional heating systems?",
    Answer:
      "Generally, yes. Underfloor heating operates at lower temperatures, which can lead to energy savings. However, factors like insulation and the type of system can impact efficiency.",
  },
  {
    id: 4,
    Question: "How does it work?",
    Answer:
      " Underfloor heating involves the installation of a network of pipes beneath the floor surface to distribute heat evenly throughout a space. In systems using a Concrete Milling machine, channels approximately 16mm in width are created within the concrete floor. These channels house the heating pipes, typically filled with warm water. As the system is activated, heat is emitted from the pipes, warming the floor. This warmth then radiates upward, providing consistent and comfortable heating for the entire room. The Concrete Milling process ensures precise and efficient placement of the heating infrastructure within the floor structure.",
  },
  {
    id: 5,
    Question:
      "Do underfloor heating systems maintain a constant temperature once warmed up?",
    Answer:
      "Yes, underfloor heating systems are designed to maintain a relatively constant temperature once the desired warmth is achieved. Thermostats and controls help regulate the system to meet comfort requirement",
  },
  {
    id: 6,
    Question:
      "Is underfloor heating slower to warm up compared to traditional heating systems?",
    Answer:
      "Underfloor heating may have a slower initial warm-up time compared to some traditional systems, as it involves heating the mass of the floor. However, many modern systems are designed for efficient and responsive heating.",
  },
  {
    id: 7,
    Question:
      "How does the temperature of underfloor heating compare to traditional heating systems?",
    Answer:
      "Underfloor heating systems typically operate at lower temperatures compared to traditional radiators. Water-based systems may have temperatures ranging from 80°F to 140°F (27°C to 60°C), while electric systems generally operate between 80°F to 104°F (27°C to 40°C)",
  },
];
export default function FAQ() {
  return (
    <div className="mb-24 mt-24 sm:pb-48">
      <div className="lg:px-24 lg:py-12 md:px-24 md:py-24 sm:px-4 sm:py-8">
        <h3 className="text-center text-5xl text-mygrey font-bold mb-2">
          FAQs
        </h3>
        <p className="text-center font-medium text-lightgrey lg:w-[60%] mx-auto">
          Find answers to the most common questions about our underfloor heating
          system and installation process.
        </p>
      </div>
      <div className="lg:w-10/12 sm:w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-8 md:gap-8 sm:gap-6">
          {data.map((faq) => (
            <div key={faq.id}>
              <div>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex py-6 px-6 lg:text-sm md:text-sm sm:text-base items-center w-full lg:bg-zinc-100/50 sm:bg-zinc-100/70 rounded-lg  justify-between text-left font-medium text-mygrey hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                        <span>{faq.Question}</span>
                        <div>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-7 w-7 text-mygrey`}
                          />
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm font-medium text-lightgrey">
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
