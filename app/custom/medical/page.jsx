'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';
import StatsGrid from '../../../components/customPageComponents/StatsGrid';

export default function MedicalHealthcarePage() {
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
    name: 'Medical & Healthcare',
    tagline: 'Professional Medical Uniforms',
    description: 'Premium quality healthcare uniforms for doctors, nurses, and medical professionals across Pakistan.',
    icon: '⚕️',
    breadcrumb: 'Medical & Healthcare',
  };

  // ============================================
  // PRODUCTS - Add/Remove/Edit easily
  // ============================================
  const products = [
    {
      id: 1,
      name: 'Doctors\' Lab Coats',
      description: 'Premium white lab coats with professional styling and comfort',
      items: ['Premium Cotton Fabric', 'Multiple Pockets', 'Custom Embroidery', 'Stain Resistant'],
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600',
      basePrice: 'From Rs. 1,800',
      showPrice: false,
    },
    {
      id: 2,
      name: 'Nurses\' Scrubs & Dresses',
      description: 'Comfortable and durable scrubs designed for long shifts',
      items: ['Breathable Fabric', 'Modern Designs', 'Multiple Colors', 'Easy Care'],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600',
      basePrice: 'From Rs. 1,500',
      showPrice: false,
    },
    {
      id: 3,
      name: 'Surgeon Scrubs',
      description: 'Sterile and comfortable surgical scrubs for operation theaters',
      items: ['Surgical Grade Fabric', 'Antimicrobial Treatment', 'Comfortable Fit', 'Multiple Sizes'],
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600',
      basePrice: 'From Rs. 2,200',
      showPrice: false,
    },
    {
      id: 4,
      name: 'Paramedic Uniforms',
      description: 'Durable uniforms for emergency medical services',
      items: ['High-Visibility Options', 'Reflective Strips', 'Utility Pockets', 'Weather Resistant'],
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600',
      basePrice: 'From Rs. 2,000',
      showPrice: false,
    },
    {
      id: 5,
      name: 'Pharmacist Coats',
      description: 'Professional white coats for pharmacy staff',
      items: ['Crisp White Fabric', 'Name Badge Holder', 'Deep Pockets', 'Wrinkle Resistant'],
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600',
      basePrice: 'From Rs. 1,600',
      showPrice: false,
    },
    {
      id: 6,
      name: 'Dentist Uniforms',
      description: 'Specialized uniforms for dental professionals',
      items: ['Stain Resistant Fabric', 'Modern Fit', 'Comfortable Design', 'Custom Options'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600',
      basePrice: 'From Rs. 1,900',
      showPrice: false,
    },
    {
      id: 7,
      name: 'Veterinary Uniforms',
      description: 'Durable and practical uniforms for veterinary professionals',
      items: ['Durable Fabric', 'Easy to Clean', 'Comfortable Fit', 'Multiple Pockets'],
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600',
      basePrice: 'From Rs. 1,700',
      showPrice: false,
    },
    {
      id: 8,
      name: 'Patient Gowns',
      description: 'Comfortable and hygienic gowns for patients',
      items: ['Soft Fabric', 'Easy Access Design', 'Disposable Options', 'Bulk Available'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600',
      basePrice: 'From Rs. 500',
      showPrice: false,
    },
  ];

  // ============================================
  // HEALTHCARE FACILITIES - Easy to modify
  // ============================================
  const facilities = [
    { name: 'Hospitals & Clinics', icon: '🏥' },
    { name: 'Dental Practices', icon: '🦷' },
    { name: 'Pharmacies', icon: '💊' },
    { name: 'Veterinary Clinics', icon: '🐾' },
    { name: 'Nursing Homes', icon: '🏨' },
    { name: 'Medical Labs', icon: '🔬' },
  ];

  // ============================================
  // FEATURES - Easy to modify
  // ============================================
  const features = [
    {
      icon: '🧪',
      title: 'Medical Grade Fabric',
      description: 'High-quality, hospital-approved fabrics with antimicrobial properties',
    },
    {
      icon: '🎨',
      title: 'Custom Colors',
      description: 'Match your hospital or clinic\'s brand colors and identity',
    },
    {
      icon: '🧼',
      title: 'Easy Care',
      description: 'Machine washable, stain-resistant, and quick-dry fabrics',
    },
    {
      icon: '💰',
      title: 'Bulk Discounts',
      description: 'Special pricing for hospitals and large medical facilities',
    },
    {
      icon: '📏',
      title: 'Perfect Fit',
      description: 'Complete size range from XS to 5XL for all body types',
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick turnaround for urgent medical uniform requirements',
    },
  ];

  // ============================================
  // WHATSAPP INTEGRATION
  // ============================================
  const getWhatsAppMessage = (productName = null) => {
    if (productName) {
      return `Hi FIAZ Uniform, I'm interested in ${productName} for my medical facility. Can you provide more details?`;
    }
    return `Hi FIAZ Uniform, I'm interested in Medical & Healthcare uniforms. Can you provide more details and pricing?`;
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
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
            alt="Medical & Healthcare Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-teal-800/80 to-cyan-900/85"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-teal-600/20 animate-pulse"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-20">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-8">
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
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => handleWhatsAppClick()}
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
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
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">25+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-blue-200 leading-tight">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">200+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-blue-200 leading-tight">Hospitals Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">100K+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-blue-200 leading-tight">Medical Uniforms</div>
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
      {/* FACILITIES SERVED SECTION */}
      {/* ============================================ */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-600">Trusted by Healthcare Facilities Across Pakistan</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                <span className="text-2xl">{facility.icon}</span>
                <span className="text-slate-700 font-medium">{facility.name}</span>
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
              Our Medical Uniform Range
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete uniform solutions for every healthcare professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <span className="text-sm font-semibold text-blue-900">Medical Grade</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>

                  {/* Items included */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-700 mb-2">Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {product.items.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price Section - Easy to enable later */}
                  {product.showPrice && product.basePrice && (
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <div className="text-2xl font-bold text-blue-600">
                        {product.basePrice}
                      </div>
                      <div className="text-sm text-slate-500">Bulk discounts available</div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
              Why Choose Our Medical Uniforms
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Quality features designed specifically for healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
      <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Trusted by Healthcare Professionals
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hospital Approved Quality</h3>
                    <p className="text-blue-100">Medical-grade fabrics meeting international healthcare standards</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Antimicrobial Treatment</h3>
                    <p className="text-blue-100">Special fabric treatment for hygiene and infection control</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comfortable for Long Shifts</h3>
                    <p className="text-blue-100">Breathable fabrics designed for 12+ hour shifts</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bulk Hospital Pricing</h3>
                    <p className="text-blue-100">Special discounts for hospitals and medical institutions</p>
                  </div>
                </div>
              </div>
            </div>

            
            <StatsGrid 
              stats={[
                { value: '200+', label: 'Hospitals' },
                { value: '100K+', label: 'Uniforms' },
                { value: '4.9★', label: 'Rating' },
                { value: '24/7', label: 'Support' }
              ]}
              primaryColor="blue-300"
              secondaryColor="teal-300"
              textColor="blue-100"
            />

          </div>
        </div>
      </section>


    </main>
  );
}