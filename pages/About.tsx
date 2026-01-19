
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Rooted in experience, dedicated to your <span className="text-indigo-600">long-term growth</span>.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Arbor Strategic was founded on a simple premise: consulting shouldn't be about thick slide decks, but about tangible business transformation. We are a boutique firm of veterans who prefer results over rhetoric.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our mission is to bridge the gap between high-level strategy and daily operational reality. We believe that the best plans are the ones that actually get implemented.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By focusing on foundational excellence—what we call the "Arbor Method"—we help businesses build the resilience needed to withstand market volatility and the flexibility to seize new opportunities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-slate-50 rounded-2xl flex items-end p-6">
                   <div className="text-4xl font-bold text-indigo-100">01</div>
                </div>
                <div className="h-64 bg-slate-900 rounded-2xl flex items-end p-6">
                   <div className="text-4xl font-bold text-slate-700">02</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-64 bg-indigo-600 rounded-2xl flex items-end p-6">
                   <div className="text-4xl font-bold text-indigo-400">03</div>
                </div>
                <div className="h-48 bg-slate-50 rounded-2xl flex items-end p-6">
                   <div className="text-4xl font-bold text-indigo-100">04</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Arbor Core Values</h2>
            <p className="text-slate-500 max-w-xl mx-auto">These principles guide every engagement and every recommendation we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-indigo-600 font-bold mb-3">01. Candor</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Radical Honesty</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We tell you what you need to hear, not what you want to hear. Trust is built on truth, even when it's uncomfortable.
              </p>
            </div>
            <div>
              <div className="text-indigo-600 font-bold mb-3">02. Precision</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Data-Driven Detail</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Broad strokes don't win races. We dive deep into the numbers and the workflows to find the 1% improvements that compound.
              </p>
            </div>
            <div>
              <div className="text-indigo-600 font-bold mb-3">03. Stewardship</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Partner Mentality</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We treat your business as if it were our own. Your success is our reputation, and we take that responsibility seriously.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
