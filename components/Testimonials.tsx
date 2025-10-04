
import React from 'react';

const testimonials = [
  {
    quote: "WorkflowCracy transformed our operations. We're saving over 20 hours a week on manual data entry, allowing our team to focus on what truly matters. It's a game-changer.",
    author: 'Jane Doe',
    title: 'COO, Innovate Inc.',
    avatar: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iIzAwQkNENCIvPgogIDxwYXRoIGQ9Ik01MCA1OCBDIDQ0IDU4LCA0MiA1NCwgNDIgNTAgQyA0MiA0MiwgNDggMzgsIDUwIDM4IEMgNTIgMzgsIDU4IDQyLCA1OCA1MCBDIDU4IDU0LCA1NiA1OCwgNTAgNTggWiBNNTAgNjAgQyA2MiA2MCwgNzAgNjgsIDcwIDgwIEwgMzAgODAgQyAzMCA2OCwgMzggNjAsIDUwIDYwIFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+'
  },
  {
    quote: "The AI chatbot they developed has improved our customer satisfaction rates by 40%. The process was seamless, and the team was incredibly supportive.",
    author: 'John Smith',
    title: 'Head of Customer Support, TechSolutions',
     avatar: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iIzBGMTcyQSIvPgogIDxwYXRoIGQ9Ik01MCA1NSBDIDQ1IDU1LCA0MyA1MSwgNDMgNDggQyA0MyA0MiwgNDcgMzgsIDUwIDM4IEMgNTMgMzgsIDU3IDQyLCA1NyA0OCBDIDU3IDUxLCA1NSA1NSwgNTAgNTUgWiBNNTAgNTggQyA2NSA1OCwgNzIgNjUsIDcyIDgwIEwgMjggODAgQyAyOCA2NSwgMzUgNTgsIDUwIDU4IFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+'
  },
  {
    quote: "I was skeptical about AI automation, but WorkflowCracy delivered beyond my expectations. Our efficiency is up, and errors are down. I highly recommend them.",
    author: 'Samantha Bee',
    title: 'CEO, Creative Co.',
    avatar: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iIzQyQTVGNSIvPgogIDxwYXRoIGQ9Ik01MCA1OCBDIDQ2IDU4LCA0NCA1NSwgNDQgNTEgQyA0NCA0NSwgNDcgNDAsIDUwIDQwIEMgNTMgNDAsIDU2IDQ1LCA1NiA1MSBDIDU2IDU1LCA1NCA1OCwgNTAgNTggWiBNNTAgNjAgQyA2NCA2MCwgNzIgNjgsIDcyIDgyIEwgMjggODIgQyAyOCA2OCwgMzYgNjAsIDUwIDYwIFoiIGZpbGw9IiNGRkZFRkUiLz4KPC9zdmc+'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">What Our Clients Say</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We're proud to help businesses achieve their automation goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center border border-slate-100">
              <img src={testimonial.avatar} alt={testimonial.author} className="w-20 h-20 rounded-full mb-4 border-4 border-secondary object-cover"/>
              <blockquote className="text-slate-600 italic mb-6">"{testimonial.quote}"</blockquote>
              <div className="font-bold text-primary">{testimonial.author}</div>
              <div className="text-sm text-slate-500">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
