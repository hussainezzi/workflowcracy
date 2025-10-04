
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="bg-primary">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Automate Your Business?
        </h2>
        <p className="text-cyan-200 mb-8 max-w-2xl mx-auto">
          Let's discuss how WorkflowCracy can help you rule your business with intelligent automation. Our initial consultation is always free.
        </p>
        <a
          href="mailto:contact@workflowcracy.com"
          className="bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 inline-block"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CTA;
