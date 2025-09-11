import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who is eligible to participate?",
    answer: "All undergraduate students are eligible to participate in NovaTra 1.0.",
  },
  {
    question: "Can teams have members from different colleges or branches?",
    answer: "Yes. Inter-college and inter-specialization teams (different branches within the same college) are allowed.",
  },
  {
    question: "What is the allowed team size? Is solo participation allowed?",
    answer: "Teams must consist of 2–3 members. Solo participation is not allowed.",
  },
  {
    question: "What is the registration process?",
    answer: "Teams must fill out the registration form and submit a 1-minute idea video along with an Instagram reel tagging @mlsc_vcet between 9th–14th September 2025.",
  },
  {
    question: "What is the event online or offline?",
    answer: "The event is hybrid: Online submissions (video + reel) followed by Offline rounds at VCET on 17th September 2025.",
  },
  {
    question: "What is the participation fee?",
    answer: "Only shortlisted teams need to pay ₹150 per team.",
  },
  {
    question: "Are there any social media requirements?",
    answer: "Yes. Teams must follow @mlsc_vcet on Instagram, tag the account in their reels, and use hashtags #mlsc #novatra1.0.",
  },
  {
    question: "How will submissions be evaluated?",
    answer: "Teams will be judged on innovation, novelty, feasibility, clarity, and overall presentation quality.",
  },
  {
    question: "Will participation certificates be provided?",
    answer: "Yes. All participants will receive certificates, released within 20 days after the event.",
  }
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w mx-auto py-16 px-10 pb-30 bg-yellow-50 md:px-50">
      <h2 className="flex mx-auto items-center text-3xl font-bold text-[var(--color-yellow)] uppercase mb-12 w-full max-w">
        <span className="flex-grow h-[2px] bg-gray-700"></span>
        <span className="px-6">FAQ's</span>
        <span className="flex-grow h-[2px] bg-gray-700"></span>
      </h2>
      <div className="space-y-4 lg:w-3/4 mx-auto text-md lg:text-lg">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-sm bg-[var(--color-maroon)] border-gray-900 border-4 hover:shadow-md transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-gray-100"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-100 font-bold" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 text-[var(--color-cream)] font-bold leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
