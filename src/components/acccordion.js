import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const faqs = [
  {
    question: "How does AL-Thuraya work?",
    answer:
      "AL-Thuraya is a travel platform that connects you with the best flights, hotels, and car rentals worldwide. Simply search for your destination, compare options, and book in minutes.",
  },
  {
    question: "How can I find the best flight deals?",
    answer:
      "Use our smart search to compare prices across hundreds of airlines. We recommend booking early and setting up price alerts to catch the best deals.",
  },
  {
    question: "What about car rentals?",
    answer:
      "We partner with leading car rental companies globally. You can browse, compare, and book vehicles directly through our platform with no hidden fees.",
  },
  {
    question: "How do I manage my flight booking?",
    answer:
      "After booking, you can manage your trip from your dashboard — change dates, add baggage, or cancel with our flexible plan options.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. We use industry-standard encryption and never store your full card details. All transactions are processed through certified secure payment gateways.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="flex flex-col items-center w-full py-14 px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Booking Flights with AL-Thuraya
      </h2>

      <div className="w-full max-w-2xl divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <div key={faq.question}>
            {/* Question row */}
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full py-5 text-left text-sm text-gray-800 font-medium hover:text-blue-900 transition-colors"
            >
              {faq.question}
              <IconChevronDown
                size={18}
                className={`text-gray-400 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            {openIndex === i && (
              <div className="pb-5 text-sm text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
