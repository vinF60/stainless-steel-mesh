"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faq: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5 my-6">
      {faq.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-sky-400 shadow-md ring-1 ring-sky-400/20'
                : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
            }`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              type="button"
              className="w-full text-left px-6 py-4.5 font-bold text-slate-800 flex justify-between items-center select-none group"
              onClick={() => toggle(idx)}
            >
              <span className="text-base sm:text-lg group-hover:text-sky-600 transition-colors pr-4" itemProp="name">
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}
              >
                ↓
              </div>
            </button>
            {isOpen && (
              <div
                className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
