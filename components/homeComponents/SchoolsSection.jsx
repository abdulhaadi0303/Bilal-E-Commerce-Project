'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getFeaturedUniforms } from '@/lib/data/hardcodedSchools';

export default function SchoolsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const featuredUniforms = getFeaturedUniforms(4); // Get 4 featured uniforms

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
    <section ref={sectionRef} className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4">
            School Uniforms
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Official School & College Uniforms
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium quality uniforms for educational institutions across Gilgit-Baltistan
          </p>
        </div>

        {/* Uniform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredUniforms.map((uniform, index) => (
            <div
              key={uniform.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Uniform Image Placeholder */}
              <div className="relative aspect-3/4 bg-linear-to-br from-slate-200 to-slate-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-20 h-20 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-slate-500 font-medium">{uniform.name}</p>
                  </div>
                </div>

                {/* Season Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    uniform.season === 'summer' 
                      ? 'bg-yellow-100 text-yellow-700' 
                      : uniform.season === 'winter'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {uniform.season === 'summer' ? '☀️ Summer' : uniform.season === 'winter' ? '❄️ Winter' : '🌤️ All Season'}
                  </span>
                </div>

                {/* Gender Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700">
                    {uniform.gender === 'boys' ? '👦 Boys' : '👧 Girls'}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm line-clamp-2">{uniform.description}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* School Name */}
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span className="text-xs text-gray-600 font-medium">{uniform.schoolName}</span>
                </div>

                {/* Uniform Name */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-1">
                  {uniform.name}
                </h3>

                {/* Grade Range */}
                <p className="text-sm text-gray-600 mb-3">{uniform.gradeRange}</p>

                {/* Components */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {uniform.components.slice(0, 3).map((component, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {component}
                    </span>
                  ))}
                  {uniform.components.length > 3 && (
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      +{uniform.components.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div>
                    <p className="text-sm text-gray-500">Complete Set</p>
                    <p className="text-2xl font-bold text-cyan-600">Rs {uniform.price.toLocaleString()}</p>
                  </div>
                  <Link
                    href={`/schools/${uniform.schoolSlug}`}
                    className="inline-flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors group"
                  >
                    View
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/schools"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            View All School Uniforms
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-cyan-600 mb-2">100+</div>
            <div className="text-sm text-gray-600">Schools Partnered</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-emerald-600 mb-2">50K+</div>
            <div className="text-sm text-gray-600">Uniforms Delivered</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-cyan-600 mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-emerald-600 mb-2">3</div>
            <div className="text-sm text-gray-600">Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
}