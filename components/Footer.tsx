
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 mb-6 block">
              ARBOR<span className="text-indigo-600">.</span>
            </Link>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              Arbor Strategic Consulting provides specialized advisory services designed to help mature organizations navigate complexity and achieve sustainable growth.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-6">Explore</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>123 Strategic Way</li>
              <li>New York, NY 10001</li>
              <li>info@arborstrategic.com</li>
              <li>+1 (555) 012-3456</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Arbor Strategic Consulting LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
