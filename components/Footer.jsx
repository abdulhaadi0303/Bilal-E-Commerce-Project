'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { customCategories, quickLinks, socialLinks, whatsappConfig } from '@/lib/data/navigation';
import { shopLocations } from '@/lib/data/shoplocations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for CTA section animation
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

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-slate-800 text-white">

      {/* Final CTA Section (Compact & Streamlined) */}
      <section ref={sectionRef} className="py-16 bg-linear-to-br from-slate-800 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Main Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Order Your{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400">
                Perfect Uniforms?
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch today and let our experts help you find the ideal uniform solution
            </p>

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Chat on WhatsApp</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className={`mt-12 pt-8 border-t border-white/10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Customer Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Quality Guaranteed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">Fast</div>
                <div className="text-sm text-gray-400">Nationwide Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-slate-800 to-transparent"></div>
      </section>
      
      {/* Main Footer Content - 4 Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
              <Image
                src="/logo.jpg"
                alt="FIAZ Uniform"
                width={48}
                height={48}
                className="w-12 h-12 object-contain rounded-md"
                style={{ width: 'auto', height: '48px' }}
              />
              <span className="font-bold text-xl">FIAZ Uniform</span>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional uniforms for every industry. Quality you can trust, service you deserve.
            </p>

            <div className="space-y-3 text-sm">
              {/* Email */}
              <a 
                href="mailto:info@fiazuniform.com"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@fiazuniform.com</span>
              </a>

              {/* Phone */}
              <a 
                href={`tel:+${whatsappConfig.phoneNumber}`}
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+{whatsappConfig.phoneNumber.replace(/(\d{2})(\d{3})(\d{7})/, '$1 $2 $3')}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Shop Locations with Hover Animation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Our Locations</h3>
            <div className="space-y-3">
              {shopLocations.map((location) => (
                <div
                  key={location.id}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="bg-slate-700 rounded-lg p-3 transition-all duration-300 cursor-pointer hover:bg-slate-600 hover:shadow-lg"
                >
                  {/* Default View (Always Visible) */}
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                        {location.city}
                        {location.isFactory && (
                          <span className="text-xs bg-cyan-600 text-white px-2 py-0.5 rounded-full">Factory</span>
                        )}
                      </h4>
                      <p className="text-gray-300 text-xs mt-0.5">{location.region}</p>
                    </div>
                  </div>

                  {/* Expanded View (On Hover) */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      hoveredLocation === location.id ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-2 text-xs text-gray-300 border-t border-slate-600 pt-3">
                      {/* Full Address */}
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{location.address}</span>
                      </div>

                      {/* Phone */}
                      <a 
                        href={`tel:${location.phone}`}
                        className="flex items-center gap-2 hover:text-cyan-400 transition"
                      >
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{location.phone}</span>
                      </a>

                      {/* Working Hours */}
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{location.workingHours}</span>
                      </div>

                      {location.isClosed && (
                        <p className="text-red-400 text-xs">Closed on {location.isClosed}</p>
                      )}

                      {/* Get Directions Button */}
                      <a
                        href={location.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-cyan-400 hover:text-cyan-300 transition font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Our Products</h3>
            <ul className="space-y-2">
              {/* School Uniforms Link */}
              <li>
                <Link
                  href="/schools"
                  className="text-gray-300 text-sm hover:text-cyan-400 transition inline-block relative group"
                >
                  School Uniforms
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              {/* Custom Categories */}
              {customCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    className="text-gray-300 text-sm hover:text-cyan-400 transition inline-block relative group"
                  >
                    {category.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-cyan-400 transition inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* <h3 className="text-lg font-bold mb-3 text-cyan-400">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    social.isWhatsApp
                      ? 'bg-emerald-500 hover:bg-emerald-600' 
                      : 'bg-slate-700 hover:bg-cyan-600'
                  } p-2.5 rounded-lg transition-all hover:scale-110`}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div> */}

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 py-6 text-center text-sm text-gray-400">
  © {currentYear} FIAZ Uniform. All Rights Reserved.
      </div>

    </footer>
  );
}