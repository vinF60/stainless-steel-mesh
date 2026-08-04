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
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="accordion">
        {faq.map((item, idx) => (
          <div
            key={idx}
            className={`accordion-item ${openIndex === idx ? 'active' : ''}`}
          >
            <div className="accordion-header" onClick={() => toggle(idx)}>
              {item.question}
            </div>
            <div className="accordion-content" itemScope itemType="https://schema.org/FAQPage">
              <p itemProp="answerText">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
