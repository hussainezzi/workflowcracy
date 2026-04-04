

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
    quote: "AI with Ezzi developed a beautiful and functional e-commerce platform for our herbal products. The integration was smooth, and the user interface is exactly what we needed to showcase our natural remedies. Their expertise in automation has saved us countless hours!",
    author: 'Hakimi Herbals',
    title: 'Wellness & Natural Remedies',
    avatar: 'https://res.cloudinary.com/de0cllasz/image/upload/v1773713323/1e1ee325-b985-4a47-a3ca-b5475876c395.png'
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