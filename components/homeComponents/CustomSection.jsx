'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { customCategories } from '@/lib/data/navigation';

export default function CustomSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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
    <section ref={sectionRef} className="py-16 bg-linear-to-br from-slate-50 via-emerald-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4 border border-emerald-200">
            Custom Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Uniforms for Every Industry
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional custom uniforms tailored to your business needs
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {customCategories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-cyan-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-linear-to-br from-cyan-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-16 h-16 bg-linear-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center text-4xl transition-all duration-500 ${
                    hoveredCard === category.id ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}>
                    {category.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors">
                    {category.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-semibold">Explore Options</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Placeholder image box */}
                <div className="mt-4 aspect-video bg-linear-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center p-4">
                    <svg className="w-10 h-10 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-400 text-xs">Product Showcase</p>
                  </div>
                </div>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Custom
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center space-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Can't Find What You Need?
            </h3>
            <p className="text-slate-600 mb-5">
              We specialize in custom designs for any industry. Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
              <Link
                href="/custom"
                className="inline-flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                View All Categories
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Features highlights */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-slate-200">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold mb-1">Custom Design</h4>
              <p className="text-slate-600 text-sm">Tailored designs matching your brand identity</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-slate-200">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold mb-1">Fast Turnaround</h4>
              <p className="text-slate-600 text-sm">Quick production and delivery timelines</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-slate-200">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold mb-1">Bulk Orders</h4>
              <p className="text-slate-600 text-sm">Competitive pricing for large quantities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}