

import React from 'react';

const testimonials = [
  {
    quote: "AI with Ezzi made a fast, and simple ecommerce workflow using a webstore front to enhacne online presence. The colorful fruity UI and simple checkout process was wondeful",
    author: 'Dr Murtaza Rasheed',
    title: 'Founder, Fruity Pop Boba',
    avatar: 'https://res.cloudinary.com/de0cllasz/image/upload/v1760028149/murtaza_bhai_ezsy8v.jpg'
  },
  {
    quote: "AI with Ezzi built fantastic Gen AI apps that helps me convince clients, plan operations and assess feedback. It has powered me up 50% more  ",
    author: 'Taher Mohammed',
    title: 'Associate Engineer at Raj Solar',
     avatar: 'https://res.cloudinary.com/de0cllasz/image/upload/v1760028849/tahr_photo_gfxssu.png'
  },
  {
    quote: "I was skeptical about AI automation, but AI with Ezzi delivered beyond my expectations. Our efficiency is up, and errors are down. I highly recommend them.",
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