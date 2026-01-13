'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { featuredSchools } from '@/lib/data/featuredSchools';

export default function SchoolsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4 border border-cyan-200">
            School Uniforms
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trusted by Leading Educational Institutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Premium quality uniforms for schools and colleges across Pakistan
          </p>
        </div>

        {/* Single Row - Revolving Logos */}
        <div className={`relative mb-16 overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-12" style={{
            animation: 'scroll-logos 50s linear infinite',
            width: 'max-content'
          }}>
            {[...featuredSchools, ...featuredSchools, ...featuredSchools, ...featuredSchools].map((school, index) => (
              <div 
                key={`logo-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-8 w-64 h-64 flex items-center justify-center border-2 border-slate-100 hover:border-cyan-400 transition-all hover:scale-110 hover:shadow-2xl"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={school.logoUrl}
                    alt={`${school.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {school.name.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/schools"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            View All School Uniforms
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border border-slate-100">
            <div className="text-4xl font-bold bg-gradient-to-br from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">100+</div>
            <div className="text-sm text-slate-600 font-medium">Schools Partnered</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border border-slate-100">
            <div className="text-4xl font-bold bg-gradient-to-br from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">50K+</div>
            <div className="text-sm text-slate-600 font-medium">Uniforms Delivered</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border border-slate-100">
            <div className="text-4xl font-bold bg-gradient-to-br from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">25+</div>
            <div className="text-sm text-slate-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border border-slate-100">
            <div className="text-4xl font-bold bg-gradient-to-br from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">3</div>
            <div className="text-sm text-slate-600 font-medium">Retail Locations</div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}