'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';
import StatsGrid from '../../../components/customPageComponents/StatsGrid';

export default function TrackSuitsPage() {
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

  // CATEGORY DATA
  const categoryData = {
    name: 'Track Suits',
    tagline: 'Premium Track Suits Collection',
    description: 'Complete range of track suits for sports teams, gyms, jogging, and everyday wear - custom printed and logo embroidered.',
    icon: '🏃',
    breadcrumb: 'Track Suits',
  };

  // PRODUCTS
  const products = [
    {
      id: 1,
      name: 'Cotton Track Suits',
      description: 'Comfortable cotton track suits for everyday wear',
      items: ['100% Cotton', 'Soft & Breathable', 'Regular Fit', 'Multiple Colors'],
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600',
      basePrice: 'From Rs. 2,500',
      showPrice: false,
    },
    {
      id: 2,
      name: 'Fleece Track Suits (Winter)',
      description: 'Warm fleece track suits perfect for winter season',
      items: ['Fleece Lining', 'Thermal Insulation', 'Hooded Options', 'Winter Wear'],
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600',
      basePrice: 'From Rs. 3,500',
      showPrice: false,
    },
    {
      id: 3,
      name: 'Dry Fit/Polyester Track Suits',
      description: 'Performance dry-fit track suits for athletes',
      items: ['Moisture-Wicking', 'Quick Dry', 'Lightweight', 'Sports Performance'],
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600',
      basePrice: 'From Rs. 3,000',
      showPrice: false,
    },
    {
      id: 4,
      name: 'Nylon Track Suits',
      description: 'Durable nylon track suits for outdoor activities',
      items: ['Water Resistant', 'Wind Proof', 'Durable', 'Outdoor Wear'],
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600',
      basePrice: 'From Rs. 2,800',
      showPrice: false,
    },
    {
      id: 5,
      name: 'Velour/Terry Track Suits',
      description: 'Luxurious velour and terry cloth track suits',
      items: ['Soft Texture', 'Premium Feel', 'Comfortable', 'Stylish Look'],
      image: 'https://images.unsplash.com/photo-1578932750355-5eb30ece487a?w=600',
      basePrice: 'From Rs. 4,000',
      showPrice: false,
    },
    {
      id: 6,
      name: 'Full Zip Track Suits',
      description: 'Full zip track suits with complete front opening',
      items: ['Full Zip Jacket', 'Easy Wear', 'Practical Design', 'All Fabrics Available'],
      image: 'https://images.unsplash.com/photo-1556906781-9cec8e98735f?w=600',
      basePrice: 'From Rs. 2,700',
      showPrice: false,
    },
    {
      id: 7,
      name: 'Half Zip & Pullover Suits',
      description: 'Classic half-zip and pullover style track suits',
      items: ['Half Zip Design', 'Pullover Hoodies', 'Classic Style', 'Comfortable Fit'],
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600',
      basePrice: 'From Rs. 2,600',
      showPrice: false,
    },
    {
      id: 8,
      name: 'Slim Fit Track Suits',
      description: 'Modern slim-fit track suits for athletic look',
      items: ['Tapered Design', 'Athletic Fit', 'Modern Style', 'All Ages'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
      basePrice: 'From Rs. 3,200',
      showPrice: false,
    },
    {
      id: 9,
      name: 'Regular Fit Track Suits',
      description: 'Classic regular fit for maximum comfort',
      items: ['Relaxed Fit', 'Maximum Comfort', 'Traditional Style', 'All Sizes'],
      image: 'https://images.unsplash.com/photo-1574184396174-6b581c88e1b5?w=600',
      basePrice: 'From Rs. 2,500',
      showPrice: false,
    },
    {
      id: 10,
      name: 'Hooded Track Suits',
      description: 'Track suits with attached hoodies for style and warmth',
      items: ['Attached Hood', 'Drawstrings', 'Stylish Design', 'Extra Warmth'],
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
      basePrice: 'From Rs. 2,900',
      showPrice: false,
    },
    {
      id: 11,
      name: 'Sports Team Track Suits',
      description: 'Custom team track suits with logos and numbers',
      items: ['Team Branding', 'Custom Logos', 'Number Printing', 'Bulk Orders'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
      basePrice: 'From Rs. 2,800',
      showPrice: false,
    },
    {
      id: 12,
      name: 'Gym Track Suits',
      description: 'Performance track suits designed for gym workouts',
      items: ['Flexible Fabric', 'Sweat-Wicking', 'Gym-Ready', 'Durable'],
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600',
      basePrice: 'From Rs. 3,000',
      showPrice: false,
    },
  ];

  // USES
  const uses = [
    { name: 'Sports Teams', icon: '⚽' },
    { name: 'Gyms & Fitness', icon: '🏋️' },
    { name: 'Jogging & Running', icon: '🏃' },
    { name: 'Schools & Colleges', icon: '🎓' },
    { name: 'Casual Wear', icon: '👔' },
    { name: 'Winter Warmth', icon: '❄️' },
  ];

  // FEATURES
  const features = [
    {
      icon: '🎨',
      title: 'Custom Printing',
      description: 'Screen printing and logo embroidery on all track suits',
    },
    {
      icon: '🧵',
      title: 'Premium Fabrics',
      description: 'High-quality cotton, fleece, polyester, and nylon materials',
    },
    {
      icon: '📏',
      title: 'All Sizes Available',
      description: 'From small to 5XL - complete size range for everyone',
    },
    {
      icon: '💰',
      title: 'Bulk Discounts',
      description: 'Special pricing for teams, gyms, and organizations',
    },
    {
      icon: '🌈',
      title: 'Multiple Colors',
      description: 'Wide range of colors to match your brand or preference',
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick production and delivery across Pakistan',
    },
  ];

  const getWhatsAppMessage = (productName = null) => {
    if (productName) {
      return `Hi FIAZ Uniform, I'm interested in ${productName}. Can you provide more details?`;
    }
    return `Hi FIAZ Uniform, I'm interested in Track Suits. Can you provide more details and pricing?`;
  };

  const handleWhatsAppClick = (productName = null) => {
    const message = getWhatsAppMessage(productName);
    const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1920&q=80"
            alt="Track Suits Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-zinc-800/80 to-gray-900/85"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-lime-600/20 via-transparent to-emerald-600/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-20">
          <div className="flex items-center justify-center gap-2 text-sm text-lime-200 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/#custom" className="hover:text-white transition">Custom Uniforms</Link>
            <span>/</span>
            <span className="text-white font-medium">{categoryData.breadcrumb}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {categoryData.tagline}
          </h1>
          
          <p className="text-xl md:text-2xl text-lime-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => handleWhatsAppClick()}
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-lime-50 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
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

          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">25+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-lime-200 leading-tight">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">12</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-lime-200 leading-tight">Types Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">100K+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-lime-200 leading-tight">Track Suits Made</div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* USES */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-600">Perfect for Every Occasion</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {uses.map((use, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-lime-50 rounded-lg">
                <span className="text-2xl">{use.icon}</span>
                <span className="text-slate-700 font-medium">{use.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section ref={sectionRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Complete Track Suits Collection
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              12 different types to match your needs and style
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
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-lime-600">Available Now</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-lime-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>

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

                  {product.showPrice && product.basePrice && (
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <div className="text-2xl font-bold text-lime-600">
                        {product.basePrice}
                      </div>
                      <div className="text-sm text-slate-500">Bulk discounts available</div>
                    </div>
                  )}

                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lime-600 to-emerald-600 hover:from-lime-700 hover:to-emerald-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
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

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Our Track Suits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Quality fabrics, custom printing, and perfect fit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-lime-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-zinc-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Pakistan's Leading Track Suit Manufacturer
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Premium Quality Fabrics</h3>
                    <p className="text-lime-100">High-quality materials from trusted suppliers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Logo Printing</h3>
                    <p className="text-lime-100">Screen printing and embroidery services available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">12 Different Types</h3>
                    <p className="text-lime-100">Complete range for every need and season</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bulk Order Discounts</h3>
                    <p className="text-lime-100">Special pricing for teams and organizations</p>
                  </div>
                </div>
              </div>
            </div>

            <StatsGrid 
              stats={[
                { value: '12', label: 'Types Available' },
                { value: '100K+', label: 'Suits Made' },
                { value: '4.9★', label: 'Rating' },
                { value: '24/7', label: 'Support' }
              ]}
              primaryColor="lime-300"
              secondaryColor="emerald-300"
              textColor="lime-100"
            />
          </div>
        </div>
      </section>

    </main>
  );
}