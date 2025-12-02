'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';

export default function SecuritySafetyPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  // ============================================
  // CATEGORY DATA - Easy to modify
  // ============================================
  const categoryData = {
    name: 'Security & Safety',
    tagline: 'Professional Security Uniforms',
    description: 'High-quality security and safety uniforms designed for protection, durability, and professional appearance.',
    icon: '🛡️',
    breadcrumb: 'Security & Safety',
  };

  // ============================================
  // PRODUCTS - Add/Remove/Edit easily
  // ============================================
  const products = [
    {
      id: 1,
      name: 'Security Guard Uniforms',
      description: 'Professional security uniforms with authority and comfort',
      items: ['Durable Fabric', 'Multiple Pockets', 'Custom Badges', 'Weather Resistant'],
      image: 'https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=600',
      basePrice: 'From Rs. 2,200',
      showPrice: false,
    },
    {
      id: 2,
      name: 'Police-Style Uniforms',
      description: 'Authoritative police-style uniforms for private security',
      items: ['Professional Design', 'Badge Support', 'Reinforced Stitching', 'Custom Colors'],
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600',
      basePrice: 'From Rs. 2,500',
      showPrice: false,
    },
    {
      id: 3,
      name: 'Army/Camouflage Uniforms',
      description: 'Military-grade camouflage uniforms for tactical operations',
      items: ['Camouflage Patterns', 'Heavy-Duty Fabric', 'Tactical Pockets', 'Durable Construction'],
      image: 'https://images.unsplash.com/photo-1624024367850-c1070c7c5098?w=600',
      basePrice: 'From Rs. 2,800',
      showPrice: false,
    },
    {
      id: 4,
      name: 'Traffic Police Uniforms',
      description: 'High-visibility uniforms for traffic wardens and police',
      items: ['Reflective Strips', 'Hi-Vis Colors', 'Breathable Fabric', 'Weather Protection'],
      image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=600',
      basePrice: 'From Rs. 2,400',
      showPrice: false,
    },
    {
      id: 5,
      name: 'Firefighter Uniforms',
      description: 'Flame-resistant uniforms for rescue and firefighting teams',
      items: ['Fire Resistant', 'Reflective Strips', 'Heavy-Duty Build', 'Safety Certified'],
      image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=600',
      basePrice: 'From Rs. 5,500',
      showPrice: false,
    },
    {
      id: 6,
      name: 'Rangers Uniforms',
      description: 'Specialized uniforms for rangers and paramilitary forces',
      items: ['Military Grade', 'Tactical Design', 'Durable Material', 'Custom Insignia'],
      image: 'https://images.unsplash.com/photo-1599742092273-50e2fcbb8c17?w=600',
      basePrice: 'From Rs. 3,200',
      showPrice: false,
    },
    {
      id: 7,
      name: 'Prison Staff Uniforms',
      description: 'Professional uniforms for correctional facility staff',
      items: ['Professional Look', 'Comfortable Fit', 'Durable Fabric', 'Easy Maintenance'],
      image: 'https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=600',
      basePrice: 'From Rs. 2,300',
      showPrice: false,
    },
  ];

  // ============================================
  // ORGANIZATIONS - Easy to modify
  // ============================================
  const organizations = [
    { name: 'Security Companies', icon: '🛡️' },
    { name: 'Police Departments', icon: '👮' },
    { name: 'Fire & Rescue', icon: '🚒' },
    { name: 'Traffic Authorities', icon: '🚦' },
    { name: 'Military & Rangers', icon: '🎖️' },
    { name: 'Prisons & Correctional', icon: '🏢' },
  ];

  // ============================================
  // FEATURES - Easy to modify
  // ============================================
  const features = [
    {
      icon: '🔒',
      title: 'Heavy-Duty Construction',
      description: 'Extra-durable fabrics and reinforced stitching for demanding environments',
    },
    {
      icon: '⚠️',
      title: 'High-Visibility Options',
      description: 'Reflective strips and hi-vis colors for safety in all conditions',
    },
    {
      icon: '🎖️',
      title: 'Custom Badges & Insignia',
      description: 'Professional embroidery for ranks, badges, and organization logos',
    },
    {
      icon: '💰',
      title: 'Bulk Force Pricing',
      description: 'Special discounts for security companies and government agencies',
    },
    {
      icon: '🌧️',
      title: 'Weather Resistant',
      description: 'All-weather fabrics suitable for outdoor security operations',
    },
    {
      icon: '⚡',
      title: 'Quick Deployment',
      description: 'Fast production and delivery for urgent security requirements',
    },
  ];

  // ============================================
  // WHATSAPP INTEGRATION
  // ============================================
  const getWhatsAppMessage = (productName = null) => {
    if (productName) {
      return `Hi FIAZ Uniform, I'm interested in ${productName} for my security organization. Can you provide more details?`;
    }
    return `Hi FIAZ Uniform, I'm interested in Security & Safety uniforms. Can you provide more details and pricing?`;
  };

  const handleWhatsAppClick = (productName = null) => {
    const message = getWhatsAppMessage(productName);
    const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* ============================================ */}
      {/* HERO SECTION - Full Background Image */}
      {/* ============================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=1920&q=80"
            alt="Security & Safety Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-gray-800/85 to-neutral-900/90"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-orange-900/20 animate-pulse"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-20">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/#custom" className="hover:text-white transition">Custom Uniforms</Link>
            <span>/</span>
            <span className="text-white font-medium">{categoryData.breadcrumb}</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {categoryData.tagline}
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => handleWhatsAppClick()}
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Get Free Quote</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Stats - Glassmorphism Cards */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-1">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-1">300+</div>
              <div className="text-sm text-gray-300">Security Forces</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-1">75K+</div>
              <div className="text-sm text-gray-300">Uniforms Made</div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============================================ */}
      {/* ORGANIZATIONS SERVED SECTION */}
      {/* ============================================ */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-600">Trusted by Security Organizations Across Pakistan</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {organizations.map((org, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg">
                <span className="text-2xl">{org.icon}</span>
                <span className="text-slate-700 font-medium">{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PRODUCTS SECTION */}
      {/* ============================================ */}
      <section ref={sectionRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Security Uniform Range
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional uniforms for every security and safety role
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'animate-fadeIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-red-600">Professional Grade</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Items included */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-slate-700 mb-2">Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price Section - Easy to enable later */}
                  {product.showPrice && product.basePrice && (
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <div className="text-2xl font-bold text-red-600">
                        {product.basePrice}
                      </div>
                      <div className="text-sm text-slate-500">Bulk discounts available</div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURES SECTION */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Our Security Uniforms
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built for protection, designed for professionalism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US SECTION */}
      {/* ============================================ */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Trusted by Security Professionals
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Military-Grade Quality</h3>
                    <p className="text-gray-300">Uniforms built to withstand the toughest security environments</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Badges & Ranks</h3>
                    <p className="text-gray-300">Professional embroidery for all ranks, badges, and insignia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">All-Weather Protection</h3>
                    <p className="text-gray-300">Durable fabrics designed for outdoor security operations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bulk Force Discounts</h3>
                    <p className="text-gray-300">Special pricing for security companies and government agencies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/20">
                <div className="text-5xl font-bold text-red-400 mb-2">300+</div>
                <div className="text-gray-300">Security Forces</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/20">
                <div className="text-5xl font-bold text-orange-400 mb-2">75K+</div>
                <div className="text-gray-300">Uniforms</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/20">
                <div className="text-5xl font-bold text-red-400 mb-2">4.9★</div>
                <div className="text-gray-300">Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/20">
                <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}