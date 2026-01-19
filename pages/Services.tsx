
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expertise built for <span className="text-indigo-600">performance</span>.</h1>
            <p className="text-lg text-slate-600">
              We provide a focused range of strategic services designed to address the core challenges of modern business growth and stability.
            </p>
          </div>

          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center text-slate-700 font-medium">
                      <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Comprehensive audit and gap analysis
                    </li>
                    <li className="flex items-center text-slate-700 font-medium">
                      <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom implementation roadmap
                    </li>
                    <li className="flex items-center text-slate-700 font-medium">
                      <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Quarterly performance tracking
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                    <img src={`https://picsum.photos/seed/${service.id}/800/450?grayscale`} alt={service.title} className="object-cover w-full h-full opacity-80" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your operations?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            Join the forward-thinking organizations that have partnered with Arbor to build a more resilient future.
          </p>
          <a href="#/contact" className="inline-block bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
            Start the Conversation
          </a>
        </div>
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </section>
    </div>
  );
};

export default Services;
