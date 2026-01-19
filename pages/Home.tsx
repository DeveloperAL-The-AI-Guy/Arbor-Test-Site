
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Clarity in <span className="text-indigo-600">Complexity</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Strategic guidance for organizations looking to scale with purpose. We combine deep analytical insights with practical operational experience to drive real results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-indigo-50 rounded-l-full -z-10 blur-3xl opacity-50"></div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="text-center font-bold text-slate-900 text-xl tracking-widest">FORTUNE</div>
            <div className="text-center font-bold text-slate-900 text-xl tracking-widest">METRIC</div>
            <div className="text-center font-bold text-slate-900 text-xl tracking-widest">GLOBAL</div>
            <div className="text-center font-bold text-slate-900 text-xl tracking-widest">STRAT</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Focus Areas</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We specialize in the critical areas that define the difference between a high-performing organization and a stagnant one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-10 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Arbor Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
                   <img src="https://picsum.photos/800/800?grayscale" alt="Team meeting" className="object-cover w-full h-full opacity-60" />
                   <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                  <p className="text-4xl font-bold text-slate-900 mb-2">94%</p>
                  <p className="text-sm text-slate-500">Of clients report significant operational improvements within the first 12 months.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Not just advice. <br /><span className="text-indigo-600">Execution that matters.</span>
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Evidence-Based Insights</h4>
                  <p className="text-slate-600 leading-relaxed">
                    We don't guess. Every recommendation is backed by thorough data analysis and market research tailored to your specific industry.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Sustainable Implementation</h4>
                  <p className="text-slate-600 leading-relaxed">
                    We stay with you through the transition. Our goal is to empower your internal teams to sustain excellence long after our engagement ends.
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <Link to="/about" className="text-slate-900 font-bold border-b-2 border-indigo-600 pb-1 hover:text-indigo-600 transition-colors">
                  Our Methodology &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
