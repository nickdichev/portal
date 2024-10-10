
import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

export default function FAQ() {
  const faqItems = [
    {
      question: "What is SECULAR's price range and target audience?",
      answer: "SECULAR offers a mid to high-end price range, targeting fashion-forward consumers aged 25-45 who value quality, sustainability, and unique design. Our products typically range from $100 to $1000, catering to a discerning clientele looking for statement pieces that blend contemporary style with timeless elegance."
    },
    {
      question: "What is the minimum order value and quantity for SECULAR products?",
      answer: "For new stockists, SECULAR requires a minimum order value of $5,000. Our minimum order quantity varies by product category but typically starts at 10 pieces per style and color. We offer flexible options for reorders to our established stockists, with lower minimums to help manage inventory efficiently."
    },
    {
      question: "What are SECULAR's payment terms and lead times?",
      answer: "SECULAR offers net 30 payment terms for established stockists, with a 50% deposit required for new accounts. Our standard lead time is 6-8 weeks from order confirmation to delivery. For custom or large orders, lead times may extend to 10-12 weeks. We also offer a limited selection of in-stock items for immediate shipping."
    },
    {
      question: "In which territories are SECULAR products available for wholesale?",
      answer: "SECULAR products are currently available for wholesale in North America, Europe, and select countries in Asia and the Middle East. We are actively expanding our global presence and welcome inquiries from international stockists. Please contact our sales team for specific information about availability in your region."
    },
    {
      question: "What is SECULAR's approach to sustainability and do they have any certifications?",
      answer: "Sustainability is at the core of SECULAR's ethos. We use eco-friendly materials, implement ethical manufacturing practices, and strive for zero-waste production. SECULAR is proud to be certified by the Global Organic Textile Standard (GOTS) and is a member of the Sustainable Apparel Coalition. We've also been recognized with the Ethical Fashion Award for our commitment to fair labor practices and environmental stewardship."
    },
    {
      question: "How often does SECULAR release new collections?",
      answer: "SECULAR releases two main collections per year: Spring/Summer and Fall/Winter. Additionally, we offer limited-edition capsule collections throughout the year, typically coinciding with major fashion events or seasons. Our core essentials line is available year-round and is refreshed annually with new colorways and subtle design updates."
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 mt-4 shadow">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}