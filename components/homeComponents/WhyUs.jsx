'use client';

import { useState, useEffect, useRef } from 'react';

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, schools: 0, customers: 0 });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters only once
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
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

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.floor(25 * progress),
        schools: Math.floor(100 * progress),
        customers: Math.floor(5000 * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({ years: 25, schools: 100, customers: 5000 });
      }
    }, interval);
  };

  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Guaranteed',
      description: 'Premium fabrics and materials with strict quality control at every step',
      color: 'cyan',
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Factory Direct',
      description: 'In-house manufacturing eliminates middlemen, ensuring best prices',
      color: 'emerald',
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'Quick turnaround times with express shipping across Pakistan',
      color: 'cyan',
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Custom Design',
      description: 'Tailored solutions with logos, embroidery, and unique specifications',
      color: 'emerald',
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Bulk Discounts',
      description: 'Special pricing for schools, hospitals, and corporate bulk orders',
      color: 'cyan',
    },
    {
      id: 6,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: '24/7 Support',
      description: 'Dedicated customer service team available via WhatsApp and phone',
      color: 'emerald',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Trusted by Institutions Across Pakistan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            25 years of excellence in uniform manufacturing
          </p>
        </div>

        {/* Stats Counter */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-linear-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="text-5xl md:text-6xl font-bold mb-2">{counters.years}+</div>
            <div className="text-xl opacity-90">Years of Experience</div>
          </div>
          <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="text-5xl md:text-6xl font-bold mb-2">{counters.schools}+</div>
            <div className="text-xl opacity-90">Schools & Institutions</div>
          </div>
          <div className="bg-linear-to-br from-cyan-500 to-emerald-500 rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="text-5xl md:text-6xl font-bold mb-2">{counters.customers.toLocaleString()}+</div>
            <div className="text-xl opacity-90">Happy Customers</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group bg-slate-50 hover:bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-slate-200 hover:border-${feature.color}-500/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center text-${feature.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Animated underline */}
              <div className={`mt-4 h-1 bg-linear-to-r from-${feature.color}-500 to-${feature.color}-400 rounded-full w-0 group-hover:w-12 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of institutions who trust FIAZ Uniform for their uniform needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
              >
                Get a Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/schools"
                className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                Browse Catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}