import React from 'react';
import { LinkedInIcon, GitHubIcon, YouTubeIcon, StreamlitIcon, WebsiteIcon } from './icons';

const founders = [
  {
    name: 'Janab Sheikh Muhammed Ezzi',
    title: 'Chairman',
    bio: "Visionary and Future-Oriented Business Motivator, He is a professor since 42 years in the revered Al-Jamea-tus-Saifiyah speciallizing in Fatimi History and Islamic Economics. He motivates in the light of, Syedna Mufaddal Saifuddin (TUS)'s businees mindedness philosophy, the community members to establish business even at bare scopes.",
    website: 'https://jameasaifiyah.edu/',
    avatar: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iIzQyQTVGNSIvPgogIDxwYXRoIGQ9Ik01MCA1OCBDIDQ2IDU4LCA0NCA1NSwgNDQgNTEgQyA0NCA0NSwgNDcgNDAsIDUwIDQwIEMgNTMgNDAsIDU2IDQ1LCA1NiA1MSBDIDU2IDU1LCA1NCA1OCwgNTAgNTggWiBNNTAgNjAgQyA2NCA2MCwgNzIgNjgsIDcyIDgyIEwgMjggODIgQyAyOCA2OCwgMzYgNjAsIDUwIDYwIFoiIGZpbGw9IiNGRkZFRkUiLz4KPC9zdmc+'
  },
  {
    name: 'Mustafa Mohammed Ezzi',
    title: 'Co-Founder & CEO',
    bio: 'Mustafa Mohammed is a CSPO and Senior SQA Analyst transitioning into Machine Learning. He brings 9+ years of software quality expertise, blending it with Python, Deep Learning, and MLOps to ensure all automated solutions are robust, reliable, and powered by cutting-edge AI.',
    linkedin: 'https://www.linkedin.com/in/mustafa-mohammed-ezzi/',
    streamlit: 'https://share.streamlit.io/user/msme1514',
    github: 'https://github.com/msme1514',
    avatar: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iIzBGMTcyQSIvPgogIDxwYXRoIGQ9Ik01MCA1NSBDIDQ1IDU1LCA0MyA1MSwgNDMgNDggQyA0MyA0MiwgNDcgMzgsIDUwIDM4IEMgNTMgMzgsIDU3IDQyLCA1NyA0OCBDIDU3IDUxLCA1NSA1NSwgNTAgNTUgWiBNNTAgNTggQyA2NSA1OCwgNzIgNjUsIDcyIDgwIEwgMjggODAgQyAyOCA2NSwgMzUgNTgsIDUwIDU4IFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+'
  },
  {
    name: 'Hussain Muhammed Ezzi',
    title: 'Co-Founder & COO',
    bio: 'Hussain Ezzi is an Agentic AI Developer and Software Engineer who builds intelligent, automated workflows. He specializes in designing tool-using AI agents (Gemini, Chainlit) and integrating them into high-performance, multilingual automation pipelines using technologies like n8n and Next.js. He is dedicated to optimizing complex business processes.',
    linkedin: 'https://www.linkedin.com/in/hussain-ezzi-67900226a/',
    github: 'https://github.com/hussainezzi',
    youtube: 'https://www.youtube.com/channel/UCRBo2PW1AfHl9JHWnu7ArjA',
    avatar: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iIzAwN0I4QSIvPgogIDxwYXRoIGQ9Ik01MCA1OCBDIDQ2IDU4LCA0NCA1NSwgNDQgNTEgQyA0NCA0NSwgNDcgNDAsIDUwIDQwIEMgNTMgNDAsIDU2IDQ1LCA1NiA1MSBDIDU2IDU1LCA1NCA1OCwgNTAgNTggWiBNNTAgNjAgQyA2NCA2MCwgNzIgNjgsIDcyIDgyIEwgMjggODIgQyAyOCA2OCwgMzYgNjAsIDUwIDYwIFoiIGZpbGw9IiNGRkZFRkUiLz4KPC9zdmc+'
  }
];

const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Meet Our Founders</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            The visionary minds dedicated to revolutionizing your business with AI.
          </p>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
            {founders.map((founder, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center border border-slate-200 transform hover:-translate-y-2">
                    <img src={founder.avatar} alt={founder.name} className="w-28 h-28 rounded-full mb-5 border-4 border-primary object-cover"/>
                    <h3 className="text-xl font-bold text-primary">{founder.name}</h3>
                    <p className="text-md text-slate-500 mb-4">{founder.title}</p>
                    <p className="text-slate-600 mb-6 flex-grow">{founder.bio}</p>
                    <div className="flex items-center space-x-4">
                        {founder.linkedin && (
                            <a 
                                href={founder.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={`LinkedIn profile of ${founder.name}`}
                                className="text-slate-400 hover:text-primary transition-colors"
                            >
                                <LinkedInIcon />
                            </a>
                        )}
                        {founder.github && (
                            <a 
                                href={founder.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={`GitHub profile of ${founder.name}`}
                                className="text-slate-400 hover:text-dark transition-colors"
                            >
                                <GitHubIcon />
                            </a>
                        )}
                         {founder.streamlit && (
                            <a 
                                href={founder.streamlit} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={`Streamlit profile of ${founder.name}`}
                                className="text-slate-400 hover:text-red-500 transition-colors"
                            >
                                <StreamlitIcon />
                            </a>
                        )}
                        {founder.youtube && (
                            <a 
                                href={founder.youtube} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={`YouTube channel of ${founder.name}`}
                                className="text-slate-400 hover:text-red-600 transition-colors"
                            >
                                <YouTubeIcon />
                            </a>
                        )}
                        {founder.website && (
                            <a 
                                href={founder.website} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={`Website for Al-Jamea-tus-Saifiyah`}
                                className="text-slate-400 hover:text-accent transition-colors"
                            >
                                <WebsiteIcon />
                            </a>
                        )}
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;