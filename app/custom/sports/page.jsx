'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappConfig } from '@/lib/data/navigation';
import StatsGrid from '../../../components/customPageComponents/StatsGrid';

export default function SportsSpecializedPage() {
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
    name: 'Sports & Specialized',
    tagline: 'Custom Sports Team Uniforms',
    description: 'Professional sports kits, event uniforms, and specialized apparel for teams and organizations across Pakistan.',
    icon: '⚽',
    breadcrumb: 'Sports & Specialized',
  };

  // PRODUCTS
  const products = [
    {
      id: 1,
      name: 'Sports Team Kits',
      description: 'Complete team kits for football, cricket, basketball, and more',
      items: ['Custom Jerseys', 'Shorts & Pants', 'Team Numbers', 'Logo Printing'],
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600',
      basePrice: 'From Rs. 1,200',
      showPrice: false,
    },
    {
      id: 2,
      name: 'Event Management Staff',
      description: 'Professional uniforms for event organizers and coordinators',
      items: ['Branded Polo Shirts', 'ID Lanyards', 'Event Vests', 'Custom Colors'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      basePrice: 'From Rs. 1,000',
      showPrice: false,
    },
    {
      id: 3,
      name: 'Scouts Uniforms',
      description: 'Traditional scout uniforms with badges and accessories',
      items: ['Scout Shirts', 'Neckerchiefs', 'Badges & Patches', 'Caps & Hats'],
      image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600',
      basePrice: 'From Rs. 1,500',
      showPrice: false,
    },
    {
      id: 4,
      name: 'Volunteer & NGO Uniforms',
      description: 'Branded uniforms for volunteers and charity organizations',
      items: ['T-Shirts & Vests', 'Organization Logos', 'Bright Colors', 'Comfortable Fabric'],
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
      basePrice: 'From Rs. 800',
      showPrice: false,
    },
    {
      id: 5,
      name: 'Costume Uniforms',
      description: 'Custom costumes for events, dramas, and theatrical performances',
      items: ['Custom Designs', 'Period Costumes', 'Character Outfits', 'Stage Wear'],
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
      basePrice: 'From Rs. 2,500',
      showPrice: false,
    },
    {
      id: 6,
      name: 'Promotional Uniforms',
      description: 'Eye-catching uniforms for promotional campaigns and marketing',
      items: ['Branded Apparel', 'Bold Designs', 'Logo Placement', 'High Visibility'],
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600',
      basePrice: 'From Rs. 700',
      showPrice: false,
    },
  ];

  // SECTORS
  const sectors = [
    { name: 'Sports Teams', icon: '⚽' },
    { name: 'Event Companies', icon: '🎪' },
    { name: 'Scout Groups', icon: '🏕️' },
    { name: 'NGOs & Charities', icon: '🤝' },
    { name: 'Theaters & Drama', icon: '🎭' },
    { name: 'Marketing Agencies', icon: '📢' },
  ];

  // FEATURES
  const features = [
    {
      icon: '🎨',
      title: 'Full Customization',
      description: 'Complete design freedom with custom logos, colors, and team names',
    },
    {
      icon: '🏆',
      title: 'Performance Fabrics',
      description: 'Breathable, moisture-wicking fabrics for athletic performance',
    },
    {
      icon: '🖨️',
      title: 'Advanced Printing',
      description: 'Screen printing, sublimation, and embroidery services',
    },
    {
      icon: '💰',
      title: 'Team Discounts',
      description: 'Special bulk pricing for sports teams and organizations',
    },
    {
      icon: '📏',
      title: 'All Sizes Available',
      description: 'Youth to adult sizes for complete team outfitting',
    },
    {
      icon: '⚡',
      title: 'Fast Production',
      description: 'Quick turnaround for urgent events and tournaments',
    },
  ];

  const getWhatsAppMessage = (productName = null) => {
    if (productName) {
      return `Hi FIAZ Uniform, I'm interested in ${productName} for my team/organization. Can you provide more details?`;
    }
    return `Hi FIAZ Uniform, I'm interested in Sports & Specialized uniforms. Can you provide more details and pricing?`;
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
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80"
            alt="Sports & Specialized Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-red-800/80 to-pink-900/85"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 via-transparent to-pink-600/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-20">
          <div className="flex items-center justify-center gap-2 text-sm text-orange-200 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/#custom" className="hover:text-white transition">Custom Uniforms</Link>
            <span>/</span>
            <span className="text-white font-medium">{categoryData.breadcrumb}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {categoryData.tagline}
          </h1>
          
          <p className="text-xl md:text-2xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => handleWhatsAppClick()}
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-orange-50 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
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
              <div className="text-[10px] sm:text-xs md:text-sm text-orange-200 leading-tight">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">800+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-orange-200 leading-tight">Teams & Events</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">90K+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-orange-200 leading-tight">Custom Kits</div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-600">Trusted by Teams & Organizations Across Pakistan</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-lg">
                <span className="text-2xl">{sector.icon}</span>
                <span className="text-slate-700 font-medium">{sector.name}</span>
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
              Our Sports & Specialized Range
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Custom uniforms for teams, events, and organizations
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
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-orange-600">Custom Made</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

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

                  {product.showPrice && product.basePrice && (
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <div className="text-2xl font-bold text-orange-600">
                        {product.basePrice}
                      </div>
                      <div className="text-sm text-slate-500">Team discounts available</div>
                    </div>
                  )}

                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
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

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Our Sports Uniforms
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional customization for winning teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
      <section className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Trusted by Winning Teams
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Performance Fabric</h3>
                    <p className="text-orange-100">Breathable, moisture-wicking materials for peak performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Full Customization</h3>
                    <p className="text-orange-100">Any design, color, logo, and team name you want</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick Production</h3>
                    <p className="text-orange-100">Fast turnaround for tournaments and events</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Team Bulk Pricing</h3>
                    <p className="text-orange-100">Special discounts for sports teams and clubs</p>
                  </div>
                </div>
              </div>
            </div>

            <StatsGrid 
              stats={[
                { value: '800+', label: 'Teams & Events' },
                { value: '90K+', label: 'Custom Kits' },
                { value: '4.9★', label: 'Rating' },
                { value: '24/7', label: 'Support' }
              ]}
              primaryColor="orange-300"
              secondaryColor="red-300"
              textColor="orange-100"
            />

          </div>
        </div>
      </section>

    </main>
  );
}