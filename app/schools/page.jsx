'use client';

import { useState,useRef,useEffect } from 'react';
import { featuredSchools } from '@/lib/data/featuredSchools';
import { totalSchoolsCount } from '@/lib/data/allSchools';


function CounterAnimation({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(easeOut * end);
      
      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
}

export default function SchoolsPage() {
  const partnerWhatsApp = "https://wa.me/923335170270?text=Hi%20FIAZ%20Uniform";
  const orderWhatsApp = "https://wa.me/923335170270?text=I%20want%20to%20order";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      {/* Hero Section with Animated Counters */}
      <section className="bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Trusted Uniform Partner for Educational Institutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              From established schools to new institutions - we deliver quality uniforms at scale
            </p>
            
            {/* Animated Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-5xl font-bold mb-2 tabular-nums">
                  <CounterAnimation end={totalSchoolsCount} duration={2500} suffix="+" />
                </p>
                <p className="text-cyan-100 font-medium">Schools & Colleges</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-5xl font-bold mb-2 tabular-nums">
                  <CounterAnimation end={25} duration={2000} suffix="+" />
                </p>
                <p className="text-cyan-100 font-medium">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <p className="text-5xl font-bold mb-2 tabular-nums">
                  <CounterAnimation end={3} duration={1500} />
                </p>
                <p className="text-cyan-100 font-medium">Retail Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                      Our Trusted Partners
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                      Proud to serve Pakistan's most prestigious educational institutions
                    </p>
                  </div>

              {/* Large Revolving Logos Section */}
              
              {/* Row 1 - Right to Left */}
              <div className="relative mb-12">
                <div className="flex gap-12" style={{
                  animation: 'scroll-left 50s linear infinite',
                  width: 'max-content'
                }}>
                  {[...featuredSchools, ...featuredSchools, ...featuredSchools, ...featuredSchools].map((school, index) => (
                    <div 
                      key={`row1-${index}`}
                      className="flex-shrink-0 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg p-10 w-64 h-64 flex items-center justify-center border-2 border-slate-100 hover:border-cyan-400 transition-all hover:scale-110 hover:shadow-2xl"
                    >
                      <img 
                        src={school.logoUrl} 
                        alt={`${school.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Left to Right */}
              <div className="relative">
                <div className="flex gap-12" style={{
                  animation: 'scroll-right 50s linear infinite',
                  width: 'max-content'
                }}>
                  {[...featuredSchools, ...featuredSchools, ...featuredSchools, ...featuredSchools].map((school, index) => (
                    <div 
                      key={`row2-${index}`}
                      className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-10 w-64 h-64 flex items-center justify-center border-2 border-blue-100 hover:border-blue-400 transition-all hover:scale-110 hover:shadow-2xl"
                    >
                      <img 
                        src={school.logoUrl} 
                        alt={`${school.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
        

                  <div className="text-center mt-12 mb-12 py-6">
                    <a href="/schools/all-schools-list" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-lg group">
                      View Complete Client Directory ({totalSchoolsCount}+ Schools)
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            
      </section>

              {/* CTA */}
        <section>
        <div className="container mx-auto px-4 my-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Whether you're a new institution or switching suppliers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={partnerWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Partner With Us
              </a>
              
              <a
                href={orderWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 px-8 py-4 rounded-lg font-semibold transition-all transform hover:-translate-y-1"
              >
                Place Your Order
              </a>
            </div>
          </div>
        </div>
        </section>



      {/* How We Work */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                How We Work With Schools
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A proven process that ensures quality uniforms delivered on time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: 1, color: 'cyan', title: 'Design & Consultation', text: 'Custom designs with your school branding' },
                { num: 2, color: 'blue', title: 'Quality Manufacturing', text: 'In-house manufacturing ensures quality' },
                { num: 3, color: 'indigo', title: 'On-Time Delivery', text: 'Timely delivery before each term' },
                { num: 4, color: 'purple', title: 'Ongoing Support', text: 'Continuous support throughout the year' }
              ].map((step) => (
                <div key={step.num} className="relative group">
                  <div className={`bg-white rounded-xl shadow-lg p-6 border-t-4 border-${step.color}-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                    <div className={`w-12 h-12 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform`}>
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Animated Scrolling */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Why Schools Choose FIAZ Uniform
          </h2>
          <p className="text-center text-cyan-100 text-lg max-w-2xl mx-auto">
            Delivering excellence in every uniform, every time
          </p>
        </div>

        {/* Row 1 - Left to Right */}
        <div className="relative mb-8">
          <div className="flex gap-6" style={{
            animation: 'scroll-right 40s linear infinite',
            width: 'max-content'
          }}>
            {[
              { icon: '✨', title: 'Premium Quality', text: 'Durable fabrics that last' },
              { icon: '💰', title: 'Competitive Pricing', text: 'Bulk order discounts' },
              { icon: '⚡', title: 'Fast Turnaround', text: 'On-time delivery guaranteed' },
              { icon: '🎨', title: 'Custom Designs', text: 'Your branding, perfectly' },
              { icon: '📏', title: 'Perfect Sizing', text: 'Complete size range' },
              { icon: '🛡️', title: 'Quality Guarantee', text: 'We stand by our work' },
            ].concat([
              { icon: '✨', title: 'Premium Quality', text: 'Durable fabrics that last' },
              { icon: '💰', title: 'Competitive Pricing', text: 'Bulk order discounts' },
              { icon: '⚡', title: 'Fast Turnaround', text: 'On-time delivery guaranteed' },
              { icon: '🎨', title: 'Custom Designs', text: 'Your branding, perfectly' },
              { icon: '📏', title: 'Perfect Sizing', text: 'Complete size range' },
              { icon: '🛡️', title: 'Quality Guarantee', text: 'We stand by our work' },
            ]).map((item, index) => (
              <div key={`b1-${index}`} className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 w-72">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                <p className="text-cyan-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative">
          <div className="flex gap-6" style={{
            animation: 'scroll-left 40s linear infinite',
            width: 'max-content'
          }}>
            {[
              { icon: '🏭', title: 'In-House Manufacturing', text: 'Full quality control' },
              { icon: '🎯', title: 'Dedicated Support', text: '24/7 customer service' },
              { icon: '🌟', title: '25+ Years Experience', text: 'Trusted expertise' },
              { icon: '📦', title: 'Bulk Capabilities', text: 'Large orders welcome' },
              { icon: '🔄', title: 'Reorder Support', text: 'Easy reordering' },
              { icon: '✅', title: '100+ Schools', text: 'Proven track record' },
            ].concat([
              { icon: '🏭', title: 'In-House Manufacturing', text: 'Full quality control' },
              { icon: '🎯', title: 'Dedicated Support', text: '24/7 customer service' },
              { icon: '🌟', title: '25+ Years Experience', text: 'Trusted expertise' },
              { icon: '📦', title: 'Bulk Capabilities', text: 'Large orders welcome' },
              { icon: '🔄', title: 'Reorder Support', text: 'Easy reordering' },
              { icon: '✅', title: '100+ Schools', text: 'Proven track record' },
            ]).map((item, index) => (
              <div key={`b2-${index}`} className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 w-72">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                <p className="text-cyan-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}