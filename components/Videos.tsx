import React from 'react';

const videos = [
  {
    id: '8tWMqsqeWlU',
    title: 'Turn Your PDFs into a 24/7 Employee! Build a RAG Chatbot with n8n & Gemini',
  },
  {
    id: 'QkXqWy5l8Y4',
    title: 'Automate Your Google Calendar with AI & n8n: The Productivity Workflow',
  },
  {
    id: 'o3sgL0JJ9dQ',
    title: 'Build an AI Agent from Scratch (Memory is the Key!)',
  },
  {
    id: 'mysOEmE-LTY',
    title: 'Building Our First AI Agent: Weather & News with N8N',
  },
];

const Videos: React.FC = () => {
  return (
    <section id="video-showcase" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">See Our Automations in Action</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Explore how we build and deploy powerful AI solutions to solve real-world business problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col">
              <div className="relative overflow-hidden rounded-lg w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg font-bold mt-4 text-primary flex-grow">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;