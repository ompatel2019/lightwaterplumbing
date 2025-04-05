import React from 'react'
import Section from './Section';
import SectionHeader from './SectionHeader';

const Faqs = () => {
  const faqs = [
    {
      question: "Do you provide plumbing quotations?",
      answer:
        "Yes, we offer free, no-obligation quotations for all plumbing, drainage, and gas work. Our licensed plumbers will visit your property, assess the scope of work, and provide a clear quote with no hidden fees.",
    },
    {
      question: "Is LightWater Plumbing a fully licensed plumbing company?",
      answer:
        "Absolutely. We are a fully licensed and insured plumbing, drainage, and gas company. You can trust that our team meets all Australian standards and regulatory requirements.",
    },
    {
      question: "Which areas do you cover?",
      answer:
        "We service a wide area from Katoomba to Sydney. For larger-scale jobs, we’re also available to travel statewide across New South Wales. If you're unsure, feel free to reach out and ask.",
    },
    {
      question: "Why is my water suddenly brown?",
      answer:
        "Discoloured or brown water could indicate a burst pipe or corrosion inside your hot water system. It's best to shut off the hot water and contact us for a quick inspection and solution.",
    },
    {
      question: "Why is my outdoor drain is overflowing when it hasn’t rained?",
      answer:
        "This is typically caused by a blockage in your main sewer line. The overflow is a safety feature that helps prevent wastewater from backing up into your home. Call us immediately for an urgent clean-out.",
    },
  ];
  

  return (
    <Section bg="bg-primary" text="text-textWhite">
      <SectionHeader 
        sectionName="FAQs" 
        sectionHeader="Frequently Asked Questions"
        centre={true}
      />

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 rounded bg-gray-50 p-4 text-gray-900"
            >
              <h2 className="font-medium">{faq.question}</h2>

              <svg
                className="size-5 shrink-0 shadow-sm transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-200">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  )
}

export default Faqs;