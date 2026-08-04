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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion space-y-3 my-6">
      {faq.map((item, idx) => (
        <div
          key={idx}
          className={`accordion-item border border-slate-200 rounded-lg overflow-hidden transition-colors ${
            openIndex === idx ? 'bg-slate-50 border-blue-200' : 'bg-white'
          }`}
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <h3
            className="accordion-header px-5 py-4 font-semibold text-slate-800 cursor-pointer flex justify-between items-center select-none"
            itemProp="name"
            onClick={() => toggle(idx)}
          >
            <span>{item.question}</span>
            <span className="text-xl text-slate-500">{openIndex === idx ? '−' : '+'}</span>
          </h3>
          {openIndex === idx && (
            <div
              className="accordion-content px-5 pb-4 text-slate-600 border-t border-slate-100 pt-3"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
